// Write your code here.
import './index.css'
const EmojiCard = props => {
  const {details, shuffledEmojisList} = props
  const {id, emojiName, emojiUrl} = details
  return (
    <li className="emoji">
      <button type='button' className='button'>
        <img
          src={emojiUrl}
          alt={emojiName}
          className="image"
          onClick={shuffledEmojisList}
        />
      </button>
    </li>
  )
}
export default EmojiCard
