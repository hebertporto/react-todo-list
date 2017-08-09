import React from 'react'

const TaskList = (props) => {
  return (
    <div>
      <div>
        Filter:
        {props.options.map((item) => {
          return <span key={item.key}> {item.title} </span>
        })}
      </div>
      <div>
        You have 2 task to finish today
      </div>
    </div>
  )
}

export default TaskList
