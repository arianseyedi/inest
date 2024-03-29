import React from 'react'
import Topbar from '../common/Topbar'
import { makeStyles } from '@material-ui/core/styles'
import Contactbar from '../common/Contactbar'
import { Grid } from '@material-ui/core'
import ServicesIntroTitle from './ServicesIntroTitle'

const useStyles = makeStyles(theme => ({
  minHeightTop: {
    [theme.breakpoints.down('sm')]: {
      minHeight: 600,
    },
    [theme.breakpoints.down('md')]: {
      minHeight: 600,
    },
    [theme.breakpoints.up('md')]: {
      minHeight: 600,
    },
  },
  box1bg: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.90)), url(${'dims.jpeg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
  },
  homeIntro: {
    marginBottom: 80,
    marginTop: 50,
    [theme.breakpoints.up('sm')]: {
      minHeight: '40vh',
    },
  },
}))

export default function ServicesTop() {
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
              <ServicesIntroTitle />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
