import React from 'react'

const OptionsFilter = (props) => {
  return (
    <div className="filter-box">
      <div>
        Filter:
        {props.options.map((item) => {
          return <span key={item.key} className={item.title === 'All' ? 'white-text selected' : ''}> {item.title} </span>
        })}
      </div>
      <div className="white-text">
        You have <span className="red-text">2</span> task to finish today
      </div>
    </div>
  )
}

export default OptionsFilter
