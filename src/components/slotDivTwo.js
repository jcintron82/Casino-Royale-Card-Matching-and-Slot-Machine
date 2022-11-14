import { useState } from "react";
import { slotFloat } from "./body";
import domino from "../images/domino.svg";
import ace from "../images/ace.svg";
import spade from "../images/spade.svg";
import grape from "../images/grape.svg";
import seven from "../images/7.svg";
import clover from "../images/clover.svg";

export const arr = [domino, ace, spade, grape, seven, clover];
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
      console.log(count);
    }

    if (count > 25) {
      setSlotImage2(arr[0]);
      clearInterval(slotFloat.reelTwoSpin);
      count = 0;
    }
  };

  return (
    <div>
      <div
        className="slotTwoAnimation"
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
