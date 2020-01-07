import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
  },
}))

export default function InTextQuote(props) {
  const classes = useStyles()

  return (
    <Paper elevation={4} className={classes.root}>
      Here is a Quote
    </Paper>
  )
}
