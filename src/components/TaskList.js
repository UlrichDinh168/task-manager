import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
import Task from './Task'

const TaskList = () => {
  const { tasks } = useContext(TaskListContext)
  
  return (
    <div>
      <ul className="list">
        {tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </ul>
    </div>
  )
}

export default TaskList
