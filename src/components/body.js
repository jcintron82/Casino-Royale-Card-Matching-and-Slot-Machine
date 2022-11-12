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
		bulbasaurIMG,
		mewIMG
	];


function setTileImages(stateset, image) {

	return stateset(image)
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
		setTileImages(setTile1, imageArr[0]);
		setTileImages(setTile2, imageArr[1]);
		setTileImages(setTile3, imageArr[2]);
		setTileImages(setTile4, imageArr[3]);

		imageArr.sort( () => {
			return Math.random() - 0.5
		})
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