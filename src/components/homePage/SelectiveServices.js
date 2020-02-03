import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import SelectiveService from './SelectiveService'

const servicesImg = [
  'lighting.jpg',
  'homeSecurity.jpg',
  'climateControl.jpg',
  'audiosystem.jpg',
]

const useStyles = makeStyles(() => ({
  paper: {
    paddingTop: 10,
    marginTop: -148,
  },
  box: {},
  text: {
    color: 'white',
  },
}))

export default function SelectiveServices() {
  const classes = useStyles()
  return (
    <Container maxWidth="lg" id="unselectable-text">
      <Grid container direction="column" className={classes.paper}>
        <Grid item>
          <Typography gutterBottom variant="h4" className={classes.text}>
            Popular Services
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            spacing={3}
            className={classes.box}
          >
            <Grid item xs={6} s={3} md={3} lg={3} xl={3}>
              <SelectiveService
                image={servicesImg[0]}
                msg="Lighting Automation"
                anchortag="lighting"
              />
            </Grid>
            <Grid item xs={6} s={3} md={3} lg={3} xl={3}>
              <SelectiveService
                image={servicesImg[1]}
                msg="Security System"
                anchortag="security"
              />
            </Grid>
            <Grid item xs={6} s={3} md={3} lg={3} xl={3}>
              <SelectiveService
                image={servicesImg[2]}
                msg="Climate Control"
                anchortag="climatecontrol"
              />
            </Grid>
            <Grid item xs={6} s={3} md={3} lg={3} xl={3}>
              <SelectiveService image={servicesImg[3]} msg="Sound System" anchortag="sound" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
