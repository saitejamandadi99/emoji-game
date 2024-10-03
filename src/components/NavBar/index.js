// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emojilogo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      <div className="scoreContainer">
        <p className="p">Score: {score}</p>
        <p className="p">Top Score: {topScore}</p>
      </div>
    </div>
  )
}
export default NavBar
