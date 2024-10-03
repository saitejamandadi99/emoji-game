import './index.css'

const WinOrLoseCard = props => {
  const {result, score, onClickPlayAgain} = props
  const isWon = result // Directly using result as a boolean
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="resultCardContainer">
      <div className="detailsContainer">
        {isWon ? ( // Render this block if the user won
          <>
            <h1 className="resultTitle">You Won</h1>
            <p className="scoreTitle">Best Score</p>
            <p className="playerScore">12/12</p>
          </>
        ) : (
          // Render this block if the user lost
          <>
            <h1 className="resultTitle">You Lose</h1>
            <p className="scoreTitle">Score</p>
            <p className="playerScore">{score}/12</p>
          </>
        )}
        <button
          type="button"
          onClick={onClickPlayAgain}
          className="playAgainBtn"
        >
          Play Again
        </button>
      </div>
      <img src={imageUrl} alt="win or lose" className="winLogo" />
    </div>
  )
}

export default WinOrLoseCard
