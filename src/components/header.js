import { ScoreDivs } from "./scoreDivs";
import { useState } from "react";

export const functionFloat = {};

export function Header({ className }) {
  const [score, setScore] = useState(-1);
  const [highScore, setHighScore] = useState(0);

  const highCounter = () => {
    return setHighScore(score);
  };

  functionFloat.scoreCounter = () => {
    if (highScore > score) {
      highCounter();
    }
    return setScore(score + 1);
  };

  return (
    <div className="headerWrapper">
      <div className="gameTitleWrap">
        {" "}
        Pokemon Memory Game
        <div>
          {" "}
          Test your memory by selecting a card but not the same one twice!{" "}
        </div>
      </div>
      <div className="scoreDivsWrapper">
        <ScoreDivs scoreType="Current Score " text={score} />
        <ScoreDivs scoreType="High Score " text={highScore} />
        <div>{}</div>
      </div>
    </div>
  );
}

export default Header;
