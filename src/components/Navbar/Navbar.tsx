import styles from "./Navbar.module.scss";
import Logo from "../../images/Group 41053.png";

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
      <div>
        <img src="" alt="" />
        <div className={styles.time}>
          29:10 <span className={styles.timeleft}> time left</span>
        </div>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Navbar;
