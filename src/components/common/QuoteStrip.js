import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Grid, Container } from '@material-ui/core'
import FancyQuotation from './FancyQuotation'

const useStyles = makeStyles(theme => ({
  rot: {
    height: '1000px',
  },
  box: {
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      // paddingTop: 100,
      paddingBottom: 100,
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: 50,
      paddingBottom: 150,
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: 50,
      paddingBottom: 110,
    },
  },
  img: {
    width: '100%',
    height: '100%',
    backgroundImage: props =>
      `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.60)), url(${props.image})`,
    backgroundPosition: 'center',
    backgroundRepeat: ' no-repeat',
    backgroundSize: ' cover',
  },
}))

export default function QuoteStrip(props) {
  const classes = useStyles(props)

  return (
    <div className={classes.img}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.box}
      >
        <Grid item>
          <div className={clsx(classes.root)}>
            <Container maxWidth="md">
              <FancyQuotation text={props.text} by={props.by} byTitle={props.byTitle} />
            </Container>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
