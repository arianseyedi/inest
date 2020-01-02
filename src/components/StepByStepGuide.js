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
    textAlign: 'center',
  },
  paper: {
    background: 'transparent',
  },
}))

export default function HomeIntro() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <Grid container direction="column" justify="center" alignItems="stretch" spacing={10}>
        <Grid item>
          <Typography variant="h3" className={classes.text_intro}>
            iNest Home Automation Systems
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" className={classes.text_intro}>
            iNest’s robust smart home technology system provides a unique experience for
            homeowners, home builders, and property managers. Our trained licensed team will
            automate key aspects and features of your home or business space based on
            automation systems focusing on: Security, Climate Control, Lighting, audio-visual
            systems and more. We help you integrate different technology systems onto one
            platform to make your day simpler and more efficient.
          </Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row" justify="space-around" alignItems="center">
            <Grid item>
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>ICON</Grid>
                <Grid item>
                  <Typography variant="body1">text_here</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>ICON</Grid>
                <Grid item>
                  <Typography variant="body1">text_here</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>ICON</Grid>
                <Grid item>
                  <Typography variant="body1">text_here</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>ICON</Grid>
                <Grid item>
                  <Typography variant="body1">text_here</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
