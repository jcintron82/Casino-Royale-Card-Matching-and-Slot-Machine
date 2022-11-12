



export function ImageTiles({className, onClick, image}) {




	return(
		<div style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={ onClick } className={className}> </div>
		)
}

export default ImageTiles;