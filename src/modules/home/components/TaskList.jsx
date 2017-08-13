import React from 'react'

const TaskList = (props) => {
  return (
    <div className="task-list">
      {props.tasks.map((item) => {
        return (
          <div className="task-item" key={item.key}>
            <div className="task-item-checked">
              <span className="centralize">X</span>
            </div>
            <div className="task-item-body">
                Lasd Lasdsad aL asd ada LAasd asd a  Lasdsad aL asd ada LAasd asd a das das da  Las
                asd ada LAasd asd a das das da  Lasd ada LAasd asd a das das da  Lasd Lasdsad aL as
            </div>
            <div className="task-item-date">
              <span className="centralize">
                2 days
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TaskList
