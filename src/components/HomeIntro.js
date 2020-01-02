import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Button, TextField } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  box: {
    // marginTop: 200,
    height: '100%',
  },
  text_intro: {
    color: 'white',
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
      marginBottom: 64,
    },
  },
}))

export default function HomeIntro() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" style={{ height: '100%', marginTop: 24 }}>
      <Grid container direction="row" spacing={10} className={classes.box} alignItems="center">
        <Grid item sm={12} md={7}>
          <Paper className={classes.paper} elevation={0}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              className={classes.text_intro}
              style={{ paddingBottom: '30px' }}
            >
              Smart, Convenient and Secure
            </Typography>
            <Typography className={classes.text_intro}>
              Enhance security, save energy, and promote comfort with iNest home automation.
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={12} md={5}>
          <Paper className={classes.semiTransparentPaper} elevation={2}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="stretch"
              style={{ padding: 35 }}
              className={classes.condMargin}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  component="h1"
                  gutterBottom
                  className={classes.text_intro}
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
        </Grid>
      </Grid>
    </Container>
  )
}
