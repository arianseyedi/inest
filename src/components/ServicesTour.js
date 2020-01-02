import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Button } from '@material-ui/core'
import MultimediaIcon from '../resource/MultimediaIcon'
import SecurityIcon from '../resource/SecurityIcon'
import ClimateIcon from '../resource/ClimateIcon'
import LightingAutomationIcon from '../resource/LightingAutomationIcon'

const useStyles = makeStyles(() => ({
  box: {
    height: '100%',
  },
  text_intro: {
    textAlign: 'center',
  },
  paper: {
    background: 'transparent',
  },
  icon: {
    fontSize: 64,
  },
}))

export default function ServicesTour() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <Grid container direction="column" justify="center" alignItems="center" spacing={5}>
        <Grid item>
          <Typography variant="h3" className={classes.text_intro}>
            Take a Tour
          </Typography>
        </Grid>
        <Grid item>
          <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
            <Grid item>
              <Typography variant="body1">
                We offer a vast variety of services, check then out so you can get a detailed
                quote based on your needs
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary">
                Visit Services Page
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
