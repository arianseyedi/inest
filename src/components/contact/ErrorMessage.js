import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Button, TextField } from '@material-ui/core'
import FancyQuotation from '../common/FancyQuotation'
import ErrorIcon from '@material-ui/icons/Error'

const useStyles = makeStyles(theme => ({
  box: {
    width: '100%',
  },
  icon: {
    color: theme.palette.error.main,
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
          <ErrorIcon style={{ fontSize: 60 }} className={classes.icon} />
        </Grid>
        <Grid item xs={12}>
          <Typography color="textSecondary" style={{ textAlign: 'center' }}>
            Due to some error, we are unable to process your request. Please try again later.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
