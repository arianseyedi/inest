import React from 'react'
import IconButton from './IconButton'
import InstagramLogo from '../../../resource/InstagramLogo'

const LinkedinButton = props => {
  return (
    <IconButton {...props}>
      <InstagramLogo {...props} />
    </IconButton>
  )
}

export default LinkedinButton
