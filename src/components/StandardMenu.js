import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}))

export default function StandardMenu() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="flext-end"
        alignItems="center"
        spacing={4}
        style={{ padding: 24 }}
      >
        <Grid item>
          <div style={{ color: 'white' }}>About</div>
        </Grid>
        <Grid item>
          <div style={{ color: 'white' }}>Home</div>
        </Grid>
        <Grid item>
          <div style={{ color: 'white' }}>Services</div>
        </Grid>
        <Grid item>
          <div style={{ color: 'white' }}>Contact</div>
        </Grid>
        <Grid item>
          <div style={{ color: 'white' }}>Articles</div>
        </Grid>
      </Grid>
    </div>
  )
}
