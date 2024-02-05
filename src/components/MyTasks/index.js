import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import TagItem from '../TagItem'

import TaskItem from '../TaskItem'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    task: '',
    tag: tagsList[0].optionId,
    activeTag: '',
    tasksList: [],
    tagSelect: false,
  }

  changeTask = event => {
    this.setState({
      task: event.target.value,
    })
  }

  changeTag = event => {
    this.setState({
      tag: event.target.value,
    })
  }

  addTask = event => {
    event.preventDefault()
    const {task, tag} = this.state

    const newTask = {
      id: uuidv4(),
      task,
      tag,
    }

    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTask],
      task: '',
      tag: tagsList[0].optionId,
    }))
  }

  getTag = id => {
    const {tagSelect} = this.state
    if (tagSelect) {
      this.setState({
        tagSelect: false,
      })
    } else {
      this.setState(prevState => ({
        activeTag: id,
        tagSelect: !prevState.tagSelect,
      }))
    }
  }

  render() {
    const {task, tasksList, tag, tagSelect, activeTag} = this.state
    const filteredList = tasksList.filter(
      eachTask => eachTask.tag === activeTag,
    )
    const select = tagSelect ? filteredList : tasksList
    console.log(filteredList)
    return (
      <div className="app-container">
        <form onSubmit={this.addTask} className="input-container">
          <h1 className="create-heading">Create a tasks!</h1>
          <div className="inputoption-container">
            <label htmlFor="task" className="label">
              Task
            </label>
            <input
              id="task"
              placeholder="Enter the task here"
              className="input"
              value={task}
              onChange={this.changeTask}
            />
          </div>
          <div className="inputoption-container">
            <label htmlFor="tag" className="label">
              Tags
            </label>
            <select
              value={tag}
              onChange={this.changeTag}
              id="tag"
              className="input"
            >
              {tagsList.map(eachTag => (
                <option value={eachTag.optionId}>{eachTag.displayText}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn">
            Add Task
          </button>
        </form>
        <div className="output-container">
          <div>
            <h1 className="tag-heading">Tags</h1>
          <ul className="tags-container">
            {tagsList.map(eachTag => (
              <TagItem
                key={eachTag.optionId}
                tagDetails={eachTag}
                isActive={activeTag === eachTag.optionId}
                getTag={this.getTag}
              />
            ))}
          </ul>
          </div>
          <div>
            <h1 className="tag-heading">Tasks</h1>
          {select.length > 0 ? (
            <ul className="tasksList-container">
              {select.map(eachTask => (
                <TaskItem key={eachTask.id} taskDetails={eachTask} />
              ))}
            </ul>
          ) : (
            <p className="tag-heading">No Tasks Added Yet</p>
          )}
          </div>
        </div>
      </div>
    )
  }
}

export default MyTasks
