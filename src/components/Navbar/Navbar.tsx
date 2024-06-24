import styles from "./Navbar.module.scss";
import Logo from "../../images/Group 41053.png";
import timer from "../../images/timer-start.png";
import Eye from "../../images/eye.png";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navheading}>
        <img src={Logo} alt="Logo" className={styles.logoimage} />
        <div className={styles.logotitle}>
          <h5 className={styles.title}>Frontend developer</h5>
          <p className={styles.subtitle}>Skill assessment test</p>
        </div>
      </div>

      <div className={styles.time}>
        <span style={{ marginRight: "10px" }}>
          <img src={timer} alt="Timer" />
        </span>
        29:10 <span className={styles.timeleft}> time left</span>
      </div>
      <div className={styles.eye}>
        <img src={Eye} alt="Time watcher" />
      </div>
    </div>
  );
}

export default Navbar;
