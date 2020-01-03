import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BaseIconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: '25%',
    padding: 5,
  },
}))

const IconButton = props => {
  const classes = useStyles()

  return (
    <BaseIconButton {...props} className={classes.root}>
      {props.children}
    </BaseIconButton>
  )
}

export default IconButton
