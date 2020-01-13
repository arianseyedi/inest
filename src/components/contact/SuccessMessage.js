import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Button, TextField } from '@material-ui/core'
import FancyQuotation from '../common/FancyQuotation'
import SuccessIcon from '../../resource/SuccessIcon'

const useStyles = makeStyles(theme => ({
  box: {
    width: '100%',
  },
}))

export default function SuccessMessage() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.box}
        spacing={4}
      >
        <Grid item xs={12}>
          <SuccessIcon style={{ fontSize: 60 }} />
        </Grid>
        <Grid item xs={12}>
          <Typography color="textSecondary" style={{ textAlign: 'center' }}>
            Thank you for your request. You will be contacted in the next two business days
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
