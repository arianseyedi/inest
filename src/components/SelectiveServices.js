import React from 'react'
import Container from '@material-ui/core/Container'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import SelectiveService from './SelectiveService'

const servicesImg = ['cinema.jpg', 'lighting.jpg', 'audiosystem.jpg', 'smart-home.jpg']

const useStyles = makeStyles(() => ({
  box: {},
}))

export default function SelectiveServices() {
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        spacing={3}
        className={classes.box}
      >
        <Grid item xs={3} s={3} md={3} lg={3} xl={3}>
          <SelectiveService image={servicesImg[0]} msg="Home Theatre" />
        </Grid>
        <Grid item xs={3} s={3} md={3} lg={3} xl={3}>
          <SelectiveService image={servicesImg[1]} msg="Lighting Automation" />
        </Grid>
        <Grid item xs={3} s={3} md={3} lg={3} xl={3}>
          <SelectiveService image={servicesImg[2]} msg="Smart Home" />
        </Grid>
        <Grid item xs={3} s={3} md={3} lg={3} xl={3}>
          <SelectiveService image={servicesImg[3]} msg="Sound System" />
        </Grid>
      </Grid>
    </Container>
  )
}
