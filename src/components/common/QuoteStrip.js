import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Paper, Grid, Typography, Container } from '@material-ui/core'
import FancyQuotation from './FancyQuotation'

const useStyles = makeStyles(theme => ({
  container: {},
  box: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 200,
      paddingBottom: 200,
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: 200,
      paddingBottom: 200,
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: 200,
      paddingBottom: 200,
    },
  },
  img: {
    width: '100%',
    height: '100%',
    backgroundImage: props => `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.60)), url(${props.image})`,
    backgroundPosition: 'center',
    backgroundRepeat: ' no-repeat',
    backgroundSize: ' cover',
  },
  quote: {
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 36,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 42,
    },
  },
  overline: {
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: 15,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 15,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 15,
    },
  },
}))

export default function QuoteStrip(props) {
  const classes = useStyles(props)

  return (
    <div className={classes.img}>
      <Grid container direction="column" alignItems="center" justify="center" className={classes.box}>
        <Grid item>
          <div className={clsx(classes.root, classes.img)}>
            <Container maxWidth="lg">
              <FancyQuotation 
                  text={props.text}
                  by={props.by}
                  byTitle={props.byTitle}
                />
            </Container>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
