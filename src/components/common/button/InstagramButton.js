import React from 'react'
import IconButton from './IconButton'
import InstagramLogo from '../../../resource/InstagramLogo'

const LinkedinButton = props => {
  return (
    <IconButton {...props}>
      <InstagramLogo style={{ color: 'white' }} />
    </IconButton>
  )
}

export default LinkedinButton
