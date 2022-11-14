import { useState } from "react";
import { slotFloat } from "./body";
import domino from "../images/domino.svg";
import ace from "../images/ace.svg";
import spade from "../images/spade.svg";
import grape from "../images/grape.svg";
import seven from "../images/7.svg";
import redchip from "../images/redchip.svg";
import yellowchip from "../images/yellowchip.svg";
import { slotWinStorage } from "./slotDivs";

const arr = [domino,ace,spade,grape,seven,redchip,yellowchip];
const newArr = [];
let count = 0;

export function SlotDivTwo({ text }) {
  const [slotImage2, setSlotImage2] = useState(arr[1]);
  arr.sort(() => {
    return Math.random() - 0.5;
  });

  slotFloat.slotReelTwo = function () {
    arr.sort(() => {
      return Math.random() - 0.5;
    });
    setSlotImage2(arr[0]);
    newArr.push(arr[0]);
    arr.splice(0, 1);
    count++;
    if (arr.length == 0) {
      setSlotImage2(newArr[0]);
      arr.push(newArr[0]);
      newArr.splice(0, 1);
      count++;
    }

    if (count > 25) {
      clearInterval(slotFloat.reelTwoSpin);
      setSlotImage2(arr[0]);
      slotWinStorage.reelTwo = arr[0];
      count = 0;
      if (
        slotWinStorage.reelOne === slotWinStorage.reelTwo &&
        slotWinStorage.reelOne === slotWinStorage.reelThree
      ) {
        alert("Jackpot!");
      }
    }
  };

  return (
    <div>
      <div
        className="slotTwo"
        style={{
          backgroundImage: `url('${slotImage2}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}

export default SlotDivTwo;
