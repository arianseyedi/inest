import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import GuaranteeIcon from '../../resource/GuaranteeIcon'
import MaintenanceIcon from '../../resource/MaintenanceIcon'
import CertifiedIcon from '../../resource/CertifiedIcon'

const useStyles = makeStyles(() => ({
  text_intro: {
    textAlign: 'center',
  },
  icon: {
    color: '#76c53a',
    fontSize: 64,
  },
  container: {
    marginBottom: 48,
  },
  checkmark: {
    // marginLeft: -15,
    // marginBottom: 40
  },
}))
export default function ServicesOverview() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" id="overview-parent">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        spacing={10}
        className={classes.container}
      >
        <Grid item>
          <Typography variant="h3" className={classes.text_intro}>
            iNest Services
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" className={classes.text_intro}>
            We are experts in commercial and residential integrated technology and bring years
            of high-end automation experience into each project. iNest services include home
            theatre, security system, climate control, audio/video, lighting control, smart
            home, automated shading, and a variety of electrical services. We’re passionate
            about creating exceptional systems for our clients, and our primary focus is your
            satisfaction.
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <GuaranteeIcon id="hover-child-1" className={classes.icon} />
                </Grid>
                <Grid item>
                  <Typography id="hover-child-1" variant="caption">
                    Maximum of 1-Year Guarantee
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                  <MaintenanceIcon id="hover-child-2" className={classes.icon} />
                </Grid>
                <Grid item>
                  <Typography id="hover-child-2" variant="caption">
                    System Maintenance Support
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                  <CertifiedIcon id="hover-child-3" className={classes.icon} />
                </Grid>
                <Grid item>
                  <Grid container direction="row">
                    <Grid item>
                      <Typography id="hover-child-3" variant="caption">
                        Control4 Authorized Dealer
                      </Typography>
                    </Grid>
                    {/* <Grid item>{checkmarkIcon}</Grid> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
