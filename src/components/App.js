import React from 'react'
import '../App.css'
import TaskList from './TaskList'
import TaskListContextProvider from '../contexts/TaskListContext'
import TaskForm from './TaskForm'
import Header from './Header'

const App = () => {
  return (
    <div>
      <TaskListContextProvider>
        <div className="container">
          <div className="app-wrapper">
            <div className="main">
              <Header />
              <TaskForm />
              <TaskList />
            </div>
          </div>
        </div>
      </TaskListContextProvider>
    </div>
  )
}

export default App
