import React from 'react'

const TaskList = (props) => {
  return (
    <div>
      {props.tasks.map((item) => {
        return <span key={item.key}> {item.title} </span>
      })}
    </div>
  )
}

export default TaskList
