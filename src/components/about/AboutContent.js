import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Typography, Container, useMediaQuery } from '@material-ui/core'
import QuoteStrip from '../common/QuoteStrip'

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

export default function AboutContent(props) {
  const classes = useStyles()
  const xsmDown = useMediaQuery(theme => theme.breakpoints.down('xs'))

  return (
    <div className={classes.root}>
      <Grid container direction="column" alignItems="stretch">
        <Grid item>
          <Paper elevation={0} style={{ height: '100%', width: '100%' }}>
            <Container maxWidth="lg">
              <Grid direction="column" className={classes.visionInner}>
                <Grid item>
                  <div style={{ marginBottom: 10 }}>
                    <Typography variant="h3" className={classes.missionTitle}>
                      — Our Mission —
                    </Typography>
                  </div>
                </Grid>
                <Grid item>
                  <div>
                    <Typography variant="body1" className={classes.missionText}>
                      Equip your house with maximum automation, visibility and security using
                      the latest technology at a competitive price.
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Paper>
        </Grid>
        <Grid item>
          <QuoteStrip
            text={
              xsmDown
                ? 'Fair Pricing & Excellent Business record. Our full Home Automation was completed by a punctual, tidy, and knowledgable team with lots of experience.'
                : 'Fair Pricing & Excellent Business record. Our full Home Automation was completed by a punctual, tidy, and knowledgable team with lots of experience. We’re enjoying it now and we know it will be an asset to selling our home when the time comes.'
            }
            by="K. W"
            byTitle="Richmond Hill"
            image="gallery/toronto.jpg"
          />
        </Grid>
        <Grid item className={classes.aboutBox}>
          <Paper elevation={0}>
            <Container maxWidth="lg">
              <Grid container direction="column">
                <Grid item xs={12}>
                  <div style={{ marginBottom: 40 }}>
                    <Typography variant="h3" className={classes.aboutTitle}>
                      — Our Team —
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div>
                    <Typography variant="body1" className={classes.aboutText}>
                      iNest has been designing, programming, and installing residential and
                      commercial automation, smart home, and entertainment systems for the past
                      20 years. Our team of licensed professionals offers the right home
                      control system for you based on your requirements, lifestyle, and budget.
                      iNest is located in the north of GTA, Toronto, Ontario, Canada and it has
                      solutions for condominiums, residential homes, new construction,
                      renovation and commercial applications of all sizes and requirements.
                      We’re passionate about creating exceptional systems for our clients, and
                      we leave behind satisfied clients - that’s a promise!
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
