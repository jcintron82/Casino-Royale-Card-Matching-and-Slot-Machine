import { useState } from "react";
import { slotFloat } from "./body";
import domino from "../images/domino.svg";
import ace from "../images/ace.svg";
import spade from "../images/spade.svg";
import grape from "../images/grape.svg";
import seven from "../images/7.svg";
import redchip from "../images/redchip.svg";
import yellowchip from "../images/yellowchip.svg";
import { slotWinStorage } from './slotDivs'

const arr = [domino,ace,spade,grape,seven,redchip,yellowchip];
const newArr = [];
let count = 0;

export function SlotDivThree({ text }) {
  const [slotImage3, setSlotImage3] = useState(arr[1]);
  arr.sort(() => {
    return Math.random() - 0.5;
  });

  slotFloat.slotReelThree = function () {
    arr.sort(() => {
      return Math.random() - 0.5;
    });
    setSlotImage3(arr[0]);
    newArr.push(arr[0]);
    arr.splice(0, 1);
    count++;
    if (arr.length == 0) {
      setSlotImage3(newArr[0]);
      arr.push(newArr[0]);
      newArr.splice(0, 1);
      count++;
    }

    if (count > 45) {
      clearInterval(slotFloat.reelThreeSpin);
      setSlotImage3(arr[0]);
      slotWinStorage.reelThree = arr[0]
      count = 0;
    }
  };

  return (
    <div>
      <div
        className="slotThree"
        style={{
          backgroundImage: `url('${slotImage3}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}

export default SlotDivThree;
