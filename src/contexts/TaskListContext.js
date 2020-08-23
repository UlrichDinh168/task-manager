import React, { useState, createContext } from 'react'
import uuid from 'uuid'
export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { title: 'aaa', id: 1 },
    { title: 'bbb', id: 2 },
    { title: 'ccc', id: 3 },
  ])

  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuid() }])
  }
  return (
    <TaskListContext.Provider value={{ tasks, addTask }}>
      {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider
