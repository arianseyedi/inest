import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Button, TextField } from '@material-ui/core'
import FancyQuotation from '../common/FancyQuotation'

const useStyles = makeStyles(theme => ({
  box: {
    width: '100%',
  },
  text_intro: {
    color: 'white',
  },
  paper: {
    background: 'transparent',
  },
  transparentPaper: {
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  text: {
    color: 'white',
  },
  condMarginTop: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: '5%',
    },
  },
  condMargin: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: 48,
    },
  },
  quotationMarks: {
    color: 'white',
    fontSize: 29,
  },
  whom: {
    paddingLeft: 24,
  },
  qutoation: {
    paddingLeft: 24,
  },
}))

export default function AboutIntro() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.box}
      >
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={0}>
            <Grid
              container
              direction="column"
              justify="center"
              style={{ paddingTop: 35, paddingBottom: 35 }}
              className={classes.condMarginTop}
            >
              <Grid item>
                <Typography
                  variant="h3"
                  component="h1"
                  gutterBottom
                  className={classes.text_intro}
                  id="unselectable-text"
                >
                  About Us
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.text_intro} id="unselectable-text">
                  We dedicate time and energy to maximize your satisfaction.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Paper className={classes.transparentPaper} elevation={6}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="stretch"
              style={{ padding: 35 }}
              className={classes.condMargin}
            >
              <Grid item>
                <FancyQuotation 
                  text={"It was like the staff were installing the systems for themselves, in their own home - wanting everything to be perfect!"} 
                  by={"Tasha Monir"}
                  byTitle={"iNest Client"}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
