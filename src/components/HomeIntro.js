import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'

const useStyles = makeStyles(() => ({
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
}))

export default function HomeIntro() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" style={{ height: '100%' }}>
      <Grid
        container
        direction="row"
        spacing={10}
        className={classes.box}
        alignItems="flex-end"
      >
        <Grid item sm={12} md={6}>
          <Paper className={classes.paper} elevation={0}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              className={classes.text_intro}
              style={{ paddingBottom: '30px' }}
            >
              We Level up Your Home
            </Typography>
            <Typography className={classes.text_intro}>
              With over 20 years of experience under our belt, iNest Canada equips your home
              with the latest smart home technology and gives you the experience you are
              looking for.
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={12} md={6}>
          <Paper className={classes.paper} elevation={0}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              className={classes.text_intro}
              style={{ paddingBottom: '30px' }}
            >
              We Level up Your Home
            </Typography>
            <Typography className={classes.text_intro}>
              With over 20 years of experience under our belt, iNest Canada equips your home
              with the latest smart home technology and gives you the experience you are
              looking for.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
