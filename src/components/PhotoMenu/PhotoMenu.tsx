import styles from "./PhotoMenu.module.scss";

interface Props {
  feature: string;
  imgStatus: string;
  imgIcon: string;
  altStatus: string;
  altIcon: string;
}

function PhotoMenu({ feature, imgIcon, imgStatus, altStatus, altIcon }: Props) {
  return (
    <div className={styles.photomenu}>
      <img src={imgStatus} alt={altStatus} className={styles.status} />

      <img src={imgIcon} alt={altIcon} className={styles.icon} />
      <p>{feature}</p>
    </div>
  );
}

export default PhotoMenu;
