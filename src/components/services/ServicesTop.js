import React from 'react'
import Topbar from '../common/Topbar'
import { makeStyles } from '@material-ui/core/styles'
import Contactbar from '../common/Contactbar'
import { Grid } from '@material-ui/core'
import ServicesIntroTitle from './ServicesIntroTitle'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '40vh',
  },
  box1bg: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.90)), url(${'dims.jpeg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
  },
  homeIntro: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: 80,
      marginTop: 80,
    },
    [theme.breakpoints.up('sm')]: {
      minHeight: '40vh',
    },
  },
}))

export default function ServicesTop() {
  const classes = useStyles()
  return (
    <div>
      <Grid container direction="column" className={classes.root}>
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
