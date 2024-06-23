export const drawRect = (detections, ctx) => {
  detections.forEach((prediction) => {
    // set prediction results
    const [x, y, width, height] = prediction["bbox"];
    const text = prediction["class"];

    // set styling
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    ctx.strokeStyle = color; // corrected from strokeSyIt to strokeStyle
    ctx.font = "18px Arial";
    ctx.fillStyle = color;

    // draw rectangles and text
    ctx.beginPath();
    ctx.fillText(text, x, y);
    ctx.rect(x, y, width, height);
    ctx.stroke();
  });
};
