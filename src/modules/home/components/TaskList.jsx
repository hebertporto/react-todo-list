import React from 'react'

const TaskList = (props) => {
  return (
    <div>
      {props.tasks.map((item) => {
        return (
          <div className="task-item">
            <div>x</div>
            <div>Lasd Lasdsad aL asd ada LAasd asd a das das da </div>
            <div> 2 days </div>
          </div>
        )
      })}
    </div>
  )
}

export default TaskList
