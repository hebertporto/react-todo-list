import React from 'react'

const OptionsFilter = (props) => {
  return (
    <div className="filter">
      <div className="filter-options">
        Filter:
        {props.options.map((item) => {
          return <span key={item.key} className={item.title === 'All' ? 'white-text selected' : ''}> {item.title} </span>
        })}
      </div>
      <div className="filter-notices">
        You have <span className="red-text">2</span> task to finish today
      </div>
    </div>
  )
}

export default OptionsFilter
