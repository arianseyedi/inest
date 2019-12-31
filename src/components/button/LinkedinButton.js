import React from 'react'
import IconButton from './IconButton'
import LinkedinLogo from '../../resource/LinkedinLogo'

const LinkedinButton = props => {
  return (
    <IconButton {...props}>
      <LinkedinLogo style={{ color: 'white' }} />
    </IconButton>
  )
}

export default LinkedinButton
