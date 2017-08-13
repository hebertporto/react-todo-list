import React from 'react'
import avatar from './../../theme/images/avatar.png'

const AvatarImage = (props) => {
  return (
    <div className={props.class}>
      <img src={avatar} alt={'avatar'} className="img" />
    </div>
  )
}

export default AvatarImage
