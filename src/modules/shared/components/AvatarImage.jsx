import React from 'react'
import avatar from './../../theme/images/avatar.png'

const AvatarImage = ({ children }) => {
  return (
    <div className="imageAvatar">
      <img src={avatar} alt={'avatar'} className="img" />
    </div>
  )
}

export default AvatarImage
