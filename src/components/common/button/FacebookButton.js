import React from 'react'
import IconButton from './IconButton'
import FacebookLogo from '../../../resource/FacebookLogo'

const FacebookButton = props => {
  return (
    <IconButton {...props}>
      <FacebookLogo {...props} />
    </IconButton>
  )
}

export default FacebookButton
