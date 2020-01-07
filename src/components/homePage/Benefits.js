import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Button } from '@material-ui/core'
import MultimediaIcon from '../../resource/MultimediaIcon'
import SecurityIcon from '../../resource/SecurityIcon'
import ClimateIcon from '../../resource/ClimateIcon'
import LightingAutomationIcon from '../../resource/LightingAutomationIcon'
import './Benefits.scss'

const useStyles = makeStyles(theme => ({
  box: {
    height: '100%',
  },
  text_intro: {
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
}))

export default function Benefits() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: 103, marginBottom: 103, paddingLeft: 16, paddingRight: 16 }}
        spacing={8}
      >
        <Grid item sm={12} md={6}>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Typography variant="h3" className={classes.text_intro} color="textSecondary">
                The
                <span className={classes.specialText}> 5 </span>
                greater advantages of Smart Home Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" className={classes.text_intro} color="textSecondary">
                It is not about the technology, it is about making things work for you.
              </Typography>
              <ul style={{ color: 'grey' }}>
                <li className="benefits">
                  <Typography
                    variant="body1"
                    className={classes.text_intro}
                    color="textSecondary"
                  >
                    Spend more time doing what you love! Being able to control all of your home
                    tech systems through one device is a step forward in technology and home
                    management.
                  </Typography>
                </li>
                <li className="benefits">
                  <Typography
                    variant="body1"
                    className={classes.text_intro}
                    color="textSecondary"
                  >
                    Feel a new level of security! Home automation systems can connect motion
                    detectors, surveillance cameras, automated door locks, and other tangible
                    security measures through your home so you can control them all from your
                    smart phone.
                  </Typography>
                </li>
                <li className="benefits">
                  <Typography
                    variant="body1"
                    className={classes.text_intro}
                    color="textSecondary"
                  >
                    Give back to the environment! Full home automation keeps your home
                    comfortable while conserving energy and saving utility spend. Help the
                    environment by saving significant amount of energy.{' '}
                  </Typography>
                </li>
                <li className="benefits">
                  <Typography
                    variant="body1"
                    className={classes.text_intro}
                    color="textSecondary"
                  >
                    Enjoy anywhere, anytime convenience! Never again worry about your home when
                    you are away! A smart home allows you to use security cameras and internet
                    connection to check the status of your home or kids from anywhere in the
                    world using your laptop, tablet, or smartphone.
                  </Typography>
                </li>
                <li className="benefits">
                  <Typography
                    variant="body1"
                    className={classes.text_intro}
                    color="textSecondary"
                  >
                    Get peace of mind! A smart home system helps to prevent potentially bad
                    things from happening by enabling you to control parts of your home from
                    your smartphone and other devices.
                  </Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={12} md={6}>
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
