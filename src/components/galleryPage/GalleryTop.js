import React from 'react'
import Topbar from '../common/Topbar'
import { makeStyles } from '@material-ui/core/styles'
import Contactbar from '../common/Contactbar'
import { Grid } from '@material-ui/core'
import GalleryIntro from './GalleryIntroTitle'

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
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.90)), url(${'dims.jpeg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
  },
  homeIntro: {
    marginBottom: 80,
    marginTop: 50,
    [theme.breakpoints.up('sm')]: {
      minHeight: '30vh',
    },
  },
}))

export default function GalleryTop() {
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
              <GalleryIntro />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
