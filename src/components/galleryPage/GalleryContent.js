import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Typography, Container } from '@material-ui/core'
import QuoteStrip from '../common/QuoteStrip'
import PhotoGallery from './PhotoGallery'

const useStyles = makeStyles(theme => ({
  root: {
    // minHeight: '50vh',
  },
  aboutBox: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 200,
      marginBottom: 200,
    },
    [theme.breakpoints.down('md')]: {
      marginTop: 200,
      marginBottom: 200,
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: 200,
      marginBottom: 200,
    },
  },
  container: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 100,
      paddingBottom: 100,
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: 100,
      paddingBottom: 100,
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: 100,
      paddingBottom: 100,
    },
  },
  missionTitle: {
    textAlign: 'center',
    // [theme.breakpoints.down('sm')]: {
    //   fontSize: 19,
    // },
    // [theme.breakpoints.down('md')]: {
    //   fontSize: 22,
    // },
    // [theme.breakpoints.up('lg')]: {
    //   fontSize: 29,
    // },
  },
  missionText: {
    textAlign: 'center',
  },
  aboutText: {
    textAlign: 'center',
  },
  aboutTitle: {
    textAlign: 'center',
  },
  visionInner: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 72,
      marginBottom: 72,
    },
    [theme.breakpoints.down('md')]: {
      marginTop: 88,
      marginBottom: 88,
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: 128,
      marginBottom: 128,
    },
  },
  aboutInner: {
    // marginTop: 210,
    // marginBottom: 110,
  },
}))

export default function GalleryContent(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container direction="column" spacing={0}>
        <Grid item>
          <Paper elevation={0} style={{ height: '100%', width: '100%' }}>
            <Container maxWidth="lg">
              <Grid direction="column" className={classes.visionInner}>
                <Grid item>
                  <div style={{ marginBottom: 10 }}>
                    <Typography variant="h3" className={classes.missionTitle}>
                      At iNest, we let our work speak for itself.
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Paper>
        </Grid>
        <Grid item style={{ maxHeight: '100%' }}>
          <PhotoGallery />
        </Grid>
      </Grid>
    </div>
  )
}
