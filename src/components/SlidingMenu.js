import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import { Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import SlidingMenu from './SlidingMenu'
import IconButton from './button/IconButton'

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  menu: {
    display: 'none',
  },
}))

export default function MobileMenu(props) {
  const classes = useStyles()

  return (
    props.open && (
      <div className={classes.root}>
        {/* <div id="mySidenav" class="sidenav"> */}
        <IconButton onClick={props.onClickClose}>
          <CloseIcon />
        </IconButton>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    )
  )
}
