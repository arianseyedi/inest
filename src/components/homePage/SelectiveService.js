import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundImage: props =>
      `linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) ), url(${props.image})`,
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      height: 100,
    },
    [theme.breakpoints.up('sm')]: {
      height: 175,
    },
    borderRadius: 7,
    height: '100%',
    width: '100%',
    '&:hover': {
      cursor: 'pointer',
      WebkitFilter: 'brightness(150%)',
      transform: 'scale(1.05)',
      webkitTransition: ' all 0.5s ease',
      mozTransition: ' all 0.5s ease',
      oTransition: ' all 0.5s ease',
      msTransition: ' all 0.5s ease',
      transition: 'all 0.5s ease',
    },
  },
}))

export default function SelectiveService(props) {
  const classes = useStyles(props)
  return (
    <Paper className={classes.paper} elevation={4}>
      <a href={`/services#${props.anchortag}`} style={{ textDecoration: 'none' }}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-end"
          style={{ height: '100%' }}
        >
          <Grid item xs={6}>
            <Typography gutterBottom style={{ padding: 5, color: 'white' }} variant="h5">
              {props.msg}
            </Typography>
          </Grid>
        </Grid>
      </a>
    </Paper>
  )
}
