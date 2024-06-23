import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footerdiv}>
      <p className={styles.footer}>POWERED BY </p>
      <p className={styles.getlink}>Getlinked.AI</p>
    </div>
  );
}

export default Footer;
