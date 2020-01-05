import React from 'react'
import { Paper, Grid, Typography, TextField, Button, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 45,
    marginBottom: 65,
    backgroundColor: theme.palette.grey[200],
  },
  title: {
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 28,
    },
  },
  text: {},
}))

export default function GetQuote(props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container maxWidth="xs">
        {/* <Paper elevation={0}> */}
        <Grid container direction="column" justify="center" alignItems="stretch" spacing={6}>
          <Grid item>
            <Grid container direction="column" justify="flex-end" spacing={1}>
              <Grid item>
                <Typography variant="h4">Would like to know more?</Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.text} variant="body1">
                  iNest Offers competitive prices with complete transparency. You can count on
                  us!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  required
                  id="standard-required"
                  label="Your Email"
                  style={{ width: '100%' }}
                  variant="filled"
                  color="secondary"
                  InputLabelProps={{ style: { color: 'black' } }}
                  InputProps={{ style: { color: 'black' } }}
                />
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary" style={{ width: '100%' }}>
                  Get a quote
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* </Paper> */}
      </Container>
    </div>
  )
}
