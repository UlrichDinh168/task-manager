import React, { useContext, useState } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const TaskForm = () => {
	const {addTask} = useContext(TaskListContext)

	const [title, setTitle] = useState("")

	const handleChange = (e) => {
		setTitle(e.target.value)
		console.log(title)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		addTask(title)
		setTitle("")
	}
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
				type="text"
				onChange={handleChange}
				value={title}
        className="task-input"
        placeholder="Add task..."
        required
      />
      <div className="button">
        <button type="submit" className="btn add-task-btn">
          Add task
        </button>
        <button className="btn clear-btn">Clear</button>
      </div>
    </form>
  )
}

export default TaskForm
