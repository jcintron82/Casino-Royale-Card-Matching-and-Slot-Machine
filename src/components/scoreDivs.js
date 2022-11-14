export function ScoreDivs({ scoreType, text }) {
  return (
    <div className="scoreDivs">
      <div className='scoreHeader'>{scoreType} </div>
       <div className='scoreCount'>{text}{" "}</div>
    </div>
  );
}

export default ScoreDivs;
