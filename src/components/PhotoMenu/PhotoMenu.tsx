interface Props {
  feature: string;
}

function PhotoMenu({ feature }: Props) {
  return (
    <div>
      <div></div>
      <img src="" alt="" />
      <p>{feature}</p>
    </div>
  );
}

export default PhotoMenu;
