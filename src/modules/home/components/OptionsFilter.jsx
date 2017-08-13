import React from 'react'

const OptionsFilter = (props) => {
  return (
    <div className="filter">
      <div className="filter-options">
        Filter:
        {props.options.map((item) => {
          return <span key={item.key} className={item.title === 'All' ? 'text-white' : ''}> {item.title} </span>
        })}
      </div>
      <div className="filter-notices text-white">
        You have <span className="text-red">2</span> task to finish today
      </div>
    </div>
  )
}

export default OptionsFilter
