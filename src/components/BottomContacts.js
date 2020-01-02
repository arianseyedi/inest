import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Container, Typography } from '@material-ui/core'
import EmailIcon from '../resource/EmailIcon'
import PhoneIcon from '../resource/PhoneIcon'
import MapIcon from '../resource/MapIcon'

const useStyles = makeStyles(theme => ({
  text: {
    color: theme.palette.text.secondary,
    fontSize: 13,
    textDecoration: 'none',
  },
  contactBar: {},
  icon: {
    color: theme.palette.text.secondary,
  },
}))

export default function BottomContacts() {
  const classes = useStyles()

  return (
    <Grid container direction="column" className={classes.contactBar}>
      <Grid item>
        <a href="https://goo.gl/maps/feGHvBJEUgpmu7xs8" className={classes.text}>
          <Grid container direction="row" alignItems="center" className={classes.contactBar}>
            <Grid item>
              <MapIcon className={classes.icon} />
            </Grid>
            <Grid item>
              <Typography className={classes.text}>
                57 Glen Cameron Rd #16,
                <br /> Thornhill, ON L3T 1P3, <br />
                Canada
              </Typography>
            </Grid>
          </Grid>
        </a>
      </Grid>
      <Grid item>
        <a href="mailto:info@inest.ca" className={classes.text}>
          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={1}
            className={classes.contactBar}
          >
            <Grid item>
              <EmailIcon className={classes.icon} />
            </Grid>
            <Grid item>
              <Typography className={classes.text}>info@inest.ca</Typography>
            </Grid>
          </Grid>
        </a>
      </Grid>
      <Grid item>
        <a href="tel:6476127580" className={classes.text}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={1}
            className={classes.contactBar}
          >
            <Grid item>
              <PhoneIcon className={classes.icon} />
            </Grid>
            <Grid item style={{ marginTop: 3 }}>
              <Typography className={classes.text}>6476127580</Typography>
            </Grid>
          </Grid>
        </a>
      </Grid>
    </Grid>
  )
}
