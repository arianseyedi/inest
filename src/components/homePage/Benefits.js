import React from 'react'
import clsx from 'clsx'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import DoubleTickIcon from '../../resource/DoubleTickIcon'

const useStyles = makeStyles(theme => ({
  box: {
    height: '100%',
  },
  text_title: {
    color: 'white',
  },
  text_intro: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
    },
    color: 'white',
  },
  paper: {
    background: 'transparent',
  },
  icon: {
    fontSize: 64,
  },
  specialText: {
    color: theme.palette.secondary.main,
  },
  semiTransparentPaper: {
    background: `rgba(255,255,255,0.2)`,
    borderRadius: 7,
  },
  img: {
    width: '100%',
    height: '100%',
    '&:hover': {
      cursor: 'pointer',
      WebkitFilter: 'brightness(110%)',
      transform: 'scale(1.05)',
      webkitTransition: ' all 0.5s ease',
      mozTransition: ' all 0.5s ease',
      oTransition: ' all 0.5s ease',
      msTransition: ' all 0.5s ease',
      transition: 'all 0.5s ease',
    },
  },
  tick: {
    marginRight: 15,
    marginBottom: -3,
    color: '#87ff28',
  },
}))

export default function Benefits() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ marginTop: 103, marginBottom: 103, paddingLeft: 16, paddingRight: 16 }}
        spacing={4}
      >
        <Grid item xs={12} sm={6} md={8}>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Typography variant="h3" color="textSecondary">
                The
                <span className={clsx(classes.specialText)}> 4 </span>
                greater advantages of Smart Home Automation
              </Typography>
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing={4}>
                <Grid item>
                  <Typography className={classes.text_intro} color="textSecondary">
                    It is not about the technology, it is about making things work for you.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.text_intro} color="textSecondary">
                    <DoubleTickIcon className={classes.tick} />
                    Controll all your home tech systems through one device.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography className={classes.text_intro} color="textSecondary">
                  <DoubleTickIcon className={classes.tick} />
                  Maximize your home security by monitoring and controlling locks and
                  surveillance cameras through your phone.
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.text_intro} color="textSecondary">
                  <DoubleTickIcon className={classes.tick} />
                  Reduce utility costs by saving more energy.
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.text_intro} color="textSecondary">
                  <DoubleTickIcon className={classes.tick} />
                  Become worry free! You are only a few taps of a finger away from checking
                  your home status from anywhere through phone.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Grid>
            <Paper className={classes.semiTransparentPaper} elevation={2}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="stretch"
                style={{ padding: 35 }}
                id="unselectable-text"
              >
                <Grid item>
                  <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    className={classes.text_intro}
                    style={{ paddingBottom: '30px' }}
                  >
                    3-D view of one of our projects:
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <a href="https://my.matterport.com/show/?m=EJ33Bp9SU3j" target="_blank">
                        <img src="3dproject.png" className={classes.img} />
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
