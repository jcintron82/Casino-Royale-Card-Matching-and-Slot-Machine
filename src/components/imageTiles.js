export function ImageTiles({ className, onClick, image, id }) {
  return (
    <div
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={onClick}
      className={className}
      id={id}
    ></div>
  );
}

export default ImageTiles;
