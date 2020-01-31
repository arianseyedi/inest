import React from 'react'
import Topbar from '../common/Topbar'
import { makeStyles } from '@material-ui/core/styles'
import Contactbar from '../common/Contactbar'
import { Grid } from '@material-ui/core'
import AboutIntro from './AboutIntroTitle'

const useStyles = makeStyles(theme => ({
  minHeightTop: {
    [theme.breakpoints.down('sm')]: {
      minHeight: 500,
    },
    [theme.breakpoints.down('md')]: {
      minHeight: 500,
    },
    [theme.breakpoints.up('md')]: {
      minHeight: 500,
    },
  },
  box1bg: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.90)), url(${'dims.jpeg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
  },
  homeIntro: {
    marginBottom: 30,
    marginTop: 50,
    [theme.breakpoints.up('sm')]: {
      // minHeight: '20vh',
    },
  },
}))

export default function AboutTop() {
  const classes = useStyles()
  return (
    <div>
      <Grid container direction="column" className={classes.minHeightTop}>
        <Grid item>
          <Contactbar />
        </Grid>
        <Grid item>
          <Topbar />
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="stretch"
            className={classes.homeIntro}
          >
            <Grid item>
              <AboutIntro />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
