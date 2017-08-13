import React from 'react'

import AvatarImage from './../../shared/components/AvatarImage'
import Button from './../../shared/components/Button'
import Filter from './Filter'

const Header = (props) => {
  return (
    <div className={props.class}>
      <AvatarImage class="header-avatar" />
      <Filter options={props.options} class="header-menu" />
      <Button class="header-add" />
    </div>
  )
}

export default Header
