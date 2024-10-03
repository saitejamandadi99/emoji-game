// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details, onClickEmojiCard} = props
  const {id, emojiName, emojiUrl} = details

  const onClickCard = () => {
    onClickEmojiCard(id) // Only call the onClick handler with the id
  }

  return (
    <li className="emoji">
      <button type="button" className="button" onClick={onClickCard}>
        <img src={emojiUrl} alt={emojiName} className="image" />
      </button>
    </li>
  )
}

export default EmojiCard
