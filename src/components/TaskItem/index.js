import './index.css'

const TaskItem = props => {
  const {taskDetails} = props

  return (
    <li>
    <div className="list">
      <p className="tag-heading">{taskDetails.task}</p>
      <div className="tag-box">
        <p>{taskDetails.tag}</p>
      </div>
    </div>
    </li>
  )
}

export default TaskItem
