import { ScoreDivs } from "./scoreDivs";
import { useState, useEffect } from "react";
import { ImageTiles } from "./imageTiles";
import { functionFloat, obj } from "./header";
import grape from "../images/grape.svg";
import seven from "../images/7.svg";
import clover from "../images/clover.svg";
import dice from "../images/dice.svg";
import diamond from "../images/diamond.svg";
import cherries from "../images/cherries.svg";


const events = [];

const imageArr = [grape,seven,clover,dice,diamond,cherries
];

const arrClear = (arr) => {
	arr.splice(0, arr.length);
}

function setTileImages(stateset, image) {
  functionFloat.scoreCounter();
  return stateset(image);
}

export function Body() {
  const [xstate, setxstate] = useState(null);
console.log(obj)
  useEffect(() => {
    newClick();
  }, []);

  const [tile1, setTile1] = useState();
  const [tile2, setTile2] = useState();
  const [tile3, setTile3] = useState();
  const [tile4, setTile4] = useState();

  const [tile5, setTile5] = useState()
  const [tile6, setTile6] = useState()
  // const [tile1, setTile2] = useState()

  // const [tile1, setTile2] = useState()
  // const [tile1, setTile2] = useState()
  // const [tile1, setTile2] = useState()
  // const [tile1, setTile2] = useState()

  const newClick = (event) => {
    setTileImages(setTile1, imageArr[0]);
    setTileImages(setTile2, imageArr[1]);
    setTileImages(setTile3, imageArr[2]);
    setTileImages(setTile4, imageArr[3]);

    setTileImages(setTile5, imageArr[4]);
    setTileImages(setTile6, imageArr[5]);

    imageArr.sort(() => {
      return Math.random() - 0.5;
    });
  };

  function onClick(tilename) {
    if (events.includes(tilename) && obj.score > obj.highScore) {
      alert('New High Score!');
      functionFloat.newHighScore();
      functionFloat.clearScore();
      arrClear(events);
    } else if (events.includes(tilename) && obj.score < obj.highScore) {
      alert('Maybe Next Time!')
      functionFloat.clearScore();
      arrClear(events);
    } else {
      events.push(tilename);
      newClick();
    }
  }

  return (
    <div className="body">
    <div className='tilesWrapper'>
      <ImageTiles
        className="cardTiles"
        onClick={() => onClick(tile1)}
        image={tile1}
      />
      <ImageTiles
        className="cardTiles"
        onClick={() => onClick(tile2)}
        image={tile2}
      />
      <ImageTiles
        className="cardTiles"
        onClick={() => onClick(tile3)}
        image={tile3}
      />
      <ImageTiles
        className="cardTiles"
        onClick={() => onClick(tile4)}
        image={tile4}
      />
      <ImageTiles
        className="cardTiles"
        onClick={() => onClick(tile5)}
        image={tile5}
      />
      <ImageTiles
        className="cardTiles"
        onClick={() => onClick(tile6)}
        image={tile6}
      />
      </div>
      <div className='slotsWrapper'> hello </div>
  	</div>
  );
}

export default Body;
