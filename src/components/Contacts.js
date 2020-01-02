import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Container, Typography } from '@material-ui/core'
import EmailIcon from '../resource/EmailIcon'
import PhoneIcon from '../resource/PhoneIcon'

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
        <Grid container spacing={2} className={classes.contactBar}>
          <Grid item>
            <a href="mailto:info@inest.ca" className={classes.text}>
              <Grid
                container
                direction="row"
                justify="flex-end"
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
                justify="flex-end"
                alignItems="center"
                spacing={1}
                className={classes.contactBar}
              >
                <Grid item>
                  <PhoneIcon className={classes.icon} style={{ fontSize: 17, marginTop: 3 }} />
                </Grid>
                <Grid item style={{ marginTop: 3 }}>
                  <Typography className={classes.text}>6476127580</Typography>
                </Grid>
              </Grid>
            </a>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
