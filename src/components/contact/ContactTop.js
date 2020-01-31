import React from 'react'
import Topbar from '../common/Topbar'
import { makeStyles } from '@material-ui/core/styles'
import Contactbar from '../common/Contactbar'
import { Grid } from '@material-ui/core'
import ContactTitle from './ContactTitle'

const useStyles = makeStyles(theme => ({
  minHeightTop: {
    [theme.breakpoints.down('sm')]: {
      minHeight: 400,
    },
    [theme.breakpoints.down('md')]: {
      minHeight: 400,
    },
    [theme.breakpoints.up('md')]: {
      minHeight: 400,
    },
  },
  box1bg: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.90)), url(${'/gallery/outdoor.jpg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  homeIntro: {
    marginBottom: 45,
    marginTop: 45,
    [theme.breakpoints.down('sm')]: {
      // maxHeight: '30vh',
    },
    [theme.breakpoints.up('sm')]: {
      // maxHeight: '200px',
    },
  },
}))

export default function ContactTop() {
  const classes = useStyles()
  return (
    <div className={classes.box1bg}>
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
              <ContactTitle />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
