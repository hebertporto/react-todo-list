import React from 'react'

const Filter = (props) => {
  return (
    <div>
      {props.options.map((item) => {
        return <span key={item.key}> {item.title} ({item.count}) </span>
      })}
    </div>
  )
}

export default Filter
