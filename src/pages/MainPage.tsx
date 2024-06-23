import { useState, useRef, useEffect, useCallback } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import PhotoMenu from "../components/PhotoMenu/PhotoMenu";
import styles from "./MainPage.module.scss";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";
import "@tensorflow/tfjs-backend-cpu";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import { drawRect } from "../utilities";

function MainPage() {
  const [showWebcam, setShowWebcam] = useState(false);
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const netRef = useRef<cocossd.ObjectDetection | null>(null);

  // Initialize TensorFlow.js backend
  const setupBackend = useCallback(async () => {
    await tf.setBackend("webgl");
    await tf.ready();
  }, []);

  // Main function to load the model
  const loadModel = useCallback(async () => {
    netRef.current = await cocossd.load();
  }, []);

  const detect = async () => {
    if (
      webcamRef.current &&
      webcamRef.current.video &&
      webcamRef.current.video.readyState === 4 &&
      netRef.current
    ) {
      const video = webcamRef.current.video;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      if (canvasRef.current) {
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        const obj = await netRef.current.detect(video);
        console.log(obj);

        const ctx = canvasRef.current.getContext("2d");
        if (ctx) {
          drawRect(obj, ctx);
        }
      }
    }
  };

  useEffect(() => {
    if (showWebcam) {
      setupBackend();
      loadModel();

      const interval = setInterval(() => {
        detect();
      }, 100); // Adjust the interval time as needed

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [showWebcam, setupBackend, loadModel]);

  return (
    <div>
      <Navbar />
      <div className={styles.mainpage}>
        <h2 className={styles.title}>System check</h2>
        <p className={styles.content}>
          We utilize your camera image to ensure fairness for all participants,
          and we also employ both your camera and microphone for a video
          questions where you will be prompted to record a response using your
          camera or webcam, so it's essential to verify that your camera and
          microphone are functioning correctly and that you have a stable
          internet connection. To do this, please position yourself in front of
          your camera, ensuring that your entire face is clearly visible on the
          screen. This includes your forehead, eyes, ears, nose, and lips. You
          can initiate a 5-second recording of yourself by clicking the button
          below.
        </p>
      </div>
      <div className={styles.picturesection}>
        <div className={styles.pictureframe}>
          <div className={styles.frame}>
            {showWebcam && (
              <div className={styles.webcamContainer}>
                <Webcam
                  ref={webcamRef}
                  muted={true}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />

                <canvas
                  ref={canvasRef}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            )}
          </div>
          <button className={styles.button} onClick={() => setShowWebcam(true)}>
            Take picture and continue
          </button>
        </div>
        <div className={styles.photofeatures}>
          <PhotoMenu />
          <PhotoMenu />
          <PhotoMenu />
          <PhotoMenu />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
