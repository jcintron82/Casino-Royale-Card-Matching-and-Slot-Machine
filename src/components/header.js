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
        Casino Royale!
        <div className='gameDescriptionWrap'>
          {" "}
          Select all the cards..but not the same one twice! Achieve a new high score to spin
          the slot machine!{" "}
        </div>
      </div>
      <div className="scoreDivsWrapper">
        <ScoreDivs scoreType="Score: " text={score} />
        <ScoreDivs scoreType="High Score: " text={highScore} />
        <div>{}</div>
      </div>
    </div>
  );
}

export default Header;
