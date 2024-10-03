import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = props // Destructure props here
    this.state = {
      emojisList: this.shuffleEmojis(emojisList), // Shuffle initially
      score: 0,
      topScore: 0,
      emojiClickedList: [],
      gameCompleted: false,
      isWon: false,
    }
  }

  onClickPlayAgain = () => {
    const {emojisList} = this.props // Destructure props here
    this.setState({
      score: 0,
      emojiClickedList: [],
      gameCompleted: false,
      isWon: false,
      emojisList: this.shuffleEmojis(emojisList), // Shuffle emojis when playing again
    })
  }

  didWin = () => {
    const {score} = this.state
    const {emojisList} = this.props // Destructure props here
    // Check if score equals the number of unique emojis
    if (score === emojisList.length) {
      this.setState({gameCompleted: true, isWon: true})
    }
  }

  onClickEmojiCard = id => {
    const {emojiClickedList, score, topScore} = this.state
    const emojiAlreadyClicked = emojiClickedList.includes(id)

    if (emojiAlreadyClicked) {
      // If the emoji was already clicked, end the game
      this.setState({gameCompleted: true, isWon: false})
    } else {
      // Update the score and emojiClickedList
      this.setState(prevState => {
        const newScore = prevState.score + 1
        return {
          score: newScore,
          topScore: Math.max(newScore, topScore), // Update top score if new score is higher
          emojiClickedList: [...prevState.emojiClickedList, id], // Add clicked emoji to the list
          emojisList: this.shuffleEmojis(prevState.emojisList), // Shuffle emojis after updating the state
        }
      }, this.didWin) // Call didWin in the callback of setState
    }
  }

  shuffleEmojis = list => list.sort(() => Math.random() - 0.5) // Simplified arrow function

  render() {
    const {emojisList, score, topScore, gameCompleted, isWon} = this.state // Access emojisList from state

    return (
      <div className="appContainer">
        <NavBar
          score={score}
          topScore={topScore}
          gameCompleted={gameCompleted}
        />
        <div className="gameContainer">
          {gameCompleted ? (
            <WinOrLoseCard
              result={isWon}
              score={score}
              onClickPlayAgain={this.onClickPlayAgain}
            />
          ) : (
            <ul className="listContainer">
              {emojisList.map(each => (
                <EmojiCard
                  key={each.id}
                  details={each}
                  onClickEmojiCard={this.onClickEmojiCard}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
