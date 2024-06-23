interface Props {
  feature: string;
  imgStatus: string;
  imgIcon: string;
  altStatus: string;
  altIcon: string;
}

function PhotoMenu({ feature, imgIcon, imgStatus, altStatus, altIcon }: Props) {
  return (
    <div>
      <img src={imgStatus} alt={altStatus} />
      <img src={imgIcon} alt={altIcon} />
      <p>{feature}</p>
    </div>
  );
}

export default PhotoMenu;
