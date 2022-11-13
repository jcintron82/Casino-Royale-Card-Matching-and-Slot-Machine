import { ScoreDivs } from "./scoreDivs";
import { useState } from "react";
export { functionFloat, obj }
 const functionFloat = {};
 let obj = {}

export function Header({ className }) {
  const [score, setScore] = useState(-1);
  const [highScore, setHighScore] = useState(0);

 obj.score = score;
 obj.highScore = highScore;



  functionFloat.newHighScore = () => {
    return setHighScore(score);
  };

  functionFloat.clearScore = () => {
    return setScore(0);
  };

  functionFloat.scoreCounter = () => {
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
