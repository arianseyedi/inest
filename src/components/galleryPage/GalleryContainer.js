import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
  },
}))

export default function GalleryContainer(props) {
  const classes = useStyles()

  return <div className={classes.root}>{props.children}</div>
}
