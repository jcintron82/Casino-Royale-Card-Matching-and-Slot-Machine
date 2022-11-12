import { ScoreDivs } from './scoreDivs'
import { useState, useEffect } from 'react';
import { ImageTiles } from './imageTiles'
import  pikachuIMG from '../images/pikachu.png';
import  mewIMG from '../images/mew.png';
import  squirtleIMG from '../images/squirtle.jpg';
import  bulbasaurIMG from '../images/bulbasaur.png';
// const pikaIMG = <img src= '../images/stock.avif'></img>

const imageArr = [
		pikachuIMG,
		squirtleIMG,
		mewIMG,
		bulbasaurIMG
	];


let currentImg = '';
let randomImage = ''



const randomizeImage = () => {


	 randomImage = imageArr[Math.floor(Math.random() * imageArr.length)];
	// for (let i = 0; i < imageArr.length; i++) {
	// 	console.log(imageArr[i]);
	// 	randomImage = imageArr[i];

}


function setTileImages(stateset, image) {
	randomizeImage();
	stateset(image)
}

export function Body () {

useEffect(() => {
	newClick()},[]);
	
		const [tile1, setTile1] = useState()
		const [tile2, setTile2] = useState()
		const [tile3, setTile3] = useState()
		const [tile4, setTile4] = useState()

		// const [tile1, setTile2] = useState()
		// const [tile1, setTile2] = useState()
		// const [tile1, setTile2] = useState()
		// const [tile1, setTile2] = useState()

		// const [tile1, setTile2] = useState()
		// const [tile1, setTile2] = useState()
		// const [tile1, setTile2] = useState()
		// const [tile1, setTile2] = useState()

	const newClick = () => {
	currentImg = randomImage
		setTileImages(setTile1, randomImage);
		setTileImages(setTile2, randomImage);
		setTileImages(setTile3, randomImage);
		setTileImages(setTile4, randomImage);
	}

	
	return (
		

		<div className='body' >
		<ImageTiles className='cardTiles' onClick={newClick} image={ tile1 }/>
		<ImageTiles className='cardTiles' onClick={newClick} image={ tile2 }/>
		<ImageTiles className='cardTiles' onClick={newClick} image={ tile3 }/>
		<ImageTiles className='cardTiles' onClick={newClick} image={ tile4 }/>
		</div>
		);
}

export default Body;