import { ScoreDivs } from './scoreDivs'

export function Header({className}) {
	
	return(
		<div className='headerWrapper'>
		<div className='gameTitleWrap'> Pokemon Memory Game
		<div> Test your memory by selecting a card but not the same one twice! </div>
		 </div>
				<div className='scoreDivsWrapper'>
			<ScoreDivs text='High Score'/>
			<ScoreDivs text='Current Score'/>
			<div>{}</div>
				</div></div>
		)
}

export default Header;