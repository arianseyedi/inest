import React from 'react'
import IconButton from './IconButton'
import LinkedinLogo from '../../../resource/LinkedinLogo'

const LinkedinButton = props => {
  return (
    <IconButton {...props}>
      <LinkedinLogo {...props} />
    </IconButton>
  )
}

export default LinkedinButton
