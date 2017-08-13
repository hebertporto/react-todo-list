import React from 'react'

const Filter = (props) => {
  return (
    <div className={props.class}>
      {props.options.map((item) => {
        return (
          <span style={{ paddingRight: 10 }} key={item.key}>
            {item.title} ({item.count})
          </span>
        )
      })}
    </div>
  )
}

export default Filter
