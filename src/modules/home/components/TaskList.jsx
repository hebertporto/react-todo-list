import React from 'react'

const TaskList = (props) => {
  return (
    <div className="task-list">
      {props.tasks.map((item) => {
        return (
          <div className="task-item">
            <div style={{ backgroundColor: 'blue', textAlign: 'center' }}>x</div>
            <div style={{ backgroundColor: 'yellow' }}>Lasd Lasdsad aL asd ada LAasd asd a das das da </div>
            <div style={{ backgroundColor: 'green', textAlign: 'center' }}> 2 days </div>
          </div>
        )
      })}
    </div>
  )
}

export default TaskList
