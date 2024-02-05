import './index.css'

const TagItem = props => {
  const {tagDetails, isActive, getTag} = props

  const onGetTag = () => {
    getTag(tagDetails.optionId)
  }

  return (
    <li>
      <button
        onClick={onGetTag}
        className={isActive ? 'buttonactive' : 'button'}
      >
        <p>{tagDetails.displayText}</p>
      </button>
    </li>
  )
}

export default TagItem
