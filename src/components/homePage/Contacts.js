import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Container, Typography } from '@material-ui/core'
import EmailIcon from '../../resource/EmailIcon'
import PhoneIcon from '../../resource/PhoneIcon'

const useStyles = makeStyles(theme => ({
  text: {
    color: theme.palette.text.primary,
    fontSize: 11,
    textDecoration: 'none',
  },
  contactBar: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  icon: {
    color: theme.palette.text.primary,
  },
}))

export default function Contacts() {
  const classes = useStyles()

  return (
    <Grid
      container
      direction="row"
      justify="flex-end"
      alignItems="center"
      className={classes.contactBar}
    >
      <Grid item>
        <Grid container className={classes.contactBar}>
          <Grid item>
            <a href="mailto:info@inest.ca" className={classes.text}>
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
                className={classes.contactBar}
              >
                <Grid item style={{ marginLeft: 8 }}>
                  <EmailIcon className={classes.icon} />
                </Grid>
                <Grid item style={{ marginLeft: 8 }}>
                  <Typography className={classes.text}>info@inest.ca</Typography>
                </Grid>
              </Grid>
            </a>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              className={classes.contactBar}
            >
              <Grid item style={{ marginLeft: 24 }}>
                <PhoneIcon className={classes.icon} style={{ fontSize: 17, marginTop: 3 }} />
              </Grid>
              <Grid item style={{ marginTop: 3, marginLeft: 8 }}>
                <a href="tel:+16476127580" className={classes.text}>
                  <Typography className={classes.text}>647-612-7580</Typography>
                </a>
              </Grid>
              <Grid item style={{ marginTop: 3, marginLeft: 8 }}>
                <Typography className={classes.text}>-</Typography>
              </Grid>
              <Grid item style={{ marginTop: 3, marginLeft: 8 }}>
                <a href="tel:+14165667241" className={classes.text}>
                  <Typography className={classes.text}>416-566-7241</Typography>
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
