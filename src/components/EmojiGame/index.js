/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.



*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import './index.css'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emojisList: props.emojisList,
      score: 0,
      topScore: 0,
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.state
    const shuffledList = emojisList.sort(() => Math.random() - 0.5)
    this.setState({emojisList: shuffledList}) // Update state with shuffled list
  }

  render() {
    const {emojisList, score, topScore} = this.state // Access emojisList from state

    return (
      <div className="appContainer">
        <NavBar score={score} topScore={topScore} />
      </div>
    )
  }
}

export default EmojiGame
