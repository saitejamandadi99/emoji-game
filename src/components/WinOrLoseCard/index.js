import './index.css'

const WinOrLoseCard = props => {
  const {result, score, onClickPlayAgain} = props
  const isWon = result // Directly using result as a boolean
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="resultCardContainer">
      <div>
        {isWon ? ( // Render this block if the user won
          <>
            <h1>You Won</h1>
            <p>Best Score</p>
            <p>12/12</p>
          </>
        ) : (
          // Render this block if the user lost
          <>
            <h1>You Lose</h1>
            <p>Score</p>
            <p>{score}/12</p>
          </>
        )}
        <button type="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <img src={imageUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
