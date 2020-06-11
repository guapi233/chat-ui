import React from 'react'
import PropTypes from 'prop-types'
import StyledAvatar, { StateIcon, AvatarClip, AvatarImage } from './style'

// 组件
function Avatar({ src, size = "48px", status, statusIconSize = "8px", ...rest }) {
  return (
    <StyledAvatar { ...rest }>
      { status && <StateIcon status= { status } size = { statusIconSize }></StateIcon> }
      <AvatarClip size={ size }>
        <AvatarImage src={ src } alt=""/>
      </AvatarClip>
    </StyledAvatar>
  )
}

// props类型检测
Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  status: PropTypes.oneOf(["online", "offline"]),
  statusIconSize: PropTypes.string
}

export default Avatar

