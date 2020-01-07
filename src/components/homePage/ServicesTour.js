import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Button } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  box: {},
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
          <Typography variant="h3">Take a Tour</Typography>
        </Grid>
        <Grid item>
          <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
            <Grid item>
              <Typography variant="body1">
                We offer a vast variety of services, check them out so you can get a detailed
                quote based on your needs!
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" href="/services">
                Visit Services Page
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
