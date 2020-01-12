import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Paper, Grid, Typography, Container } from '@material-ui/core'
import FancyQuotation from './FancyQuotation'
import './RouteSwitchSpinner.scss'

const useStyles = makeStyles(theme => ({
  container: {},
}))

export default function QuoteStrip(props) {
  const classes = useStyles(props)

  return (
    <div className={classes.img}>
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
