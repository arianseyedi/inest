import React from 'react'
import clsx from 'clsx'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Button, TextField } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  box: {
    // marginTop: 200,
    height: '100%',
  },
  textHeader: {
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 22,
  },
  paper: {
    background: 'transparent',
  },
  semiTransparentPaper: {
    background: `rgba(255,255,255,0.2)`,
    borderRadius: 7,
  },
  text: {
    color: 'white !important',
  },
  condMargin: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 16,
      marginBottom: 84,
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: 32,
      marginBottom: 24,
    },
  },
}))

export default function HomeIntro() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" style={{ height: '100%', marginTop: 24 }}>
      <Grid
        container
        direction="row"
        spacing={10}
        className={classes.box}
        alignItems="flex-start"
        justify="flex-start"
        id="unselectable-text"
      >
        <Grid item sm={6} md={7}>
          <Paper className={clsx(classes.paper, classes.condMargin)} elevation={0}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              className={classes.textHeader}
              style={{ paddingBottom: '30px' }}
              id="animated-home-intro-title"
            >
              Smart, Convenient and Secure
            </Typography>
            <Typography className={classes.text} id="animated-home-intro-text" variant="h5">
              Enhance security, save energy, and promote comfort with iNest home automation.
            </Typography>
          </Paper>
        </Grid>
        {/* <Grid item sm={6} md={5}>
          <Paper className={classes.semiTransparentPaper} elevation={2}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="stretch"
              style={{ padding: 35, width: '100%' }}
              className={classes.condMargin}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  gutterBottom
                  className={classes.textHeader}
                  style={{ paddingBottom: '30px' }}
                >
                  Would like to know more?
                </Typography>
              </Grid>
              <Grid item>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <TextField
                      required
                      id="standard-required"
                      label="Your Email"
                      style={{ width: '100%' }}
                      variant="filled"
                      color="secondary"
                      InputProps={{ style: { color: 'white' } }}
                    />
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="secondary" style={{ width: '100%' }}>
                      Get a quote
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid> */}
      </Grid>
    </Container>
  )
}
