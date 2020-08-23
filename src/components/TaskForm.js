import React, { useContext, useState, useEffect } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const TaskForm = () => {
  const { addTask, clearList, editItem, setItem, editTask } = useContext(
    TaskListContext
  )

  const [title, setTitle] = useState('')

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!editItem) {
      addTask(title)
      setTitle('')
    } else {
      editTask(title, editItem.id)
    }
  }

  useEffect(() => {
    editItem ? setTitle(editItem.title) : setTitle('')
  }, [editItem])
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
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>
        <button onClick={clearList} className="btn clear-btn">
          Clear
        </button>
      </div>
    </form>
  )
}

export default TaskForm
