import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import HoverButton from './HoverButton'
import { List, ListItem, Typography } from '@material-ui/core'
import Link from './Link'

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('xs')]: {
      width: '480px',
      flexGrow: 1,
    },
  },
  text: {
    fontSize: 14,
  },
  list: {
    display: 'flex',
    flexGrow: 1,

    flexDirection: 'row',
    padding: 0,
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    borderTop: 'solid 1px transparent',
    borderBottom: 'solid 1px transparent',
    borderLeft: 'solid 5px transparent',
    paddingRight: 10,
    '&:hover': {
      borderLeftColor: '#ffd500',
      transition: '0.5s ease-in-out',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
}))

export default function StandardMenu() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List className={classes.list} id="unselectable-text">
        <ListItem className={classes.listItem}>
          <Link href="/about" className={classes.link}>
            <Typography variant="overline" className={classes.text}>
              about
            </Typography>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link href="/services" className={classes.link}>
            <Typography variant="overline" className={classes.text}>
              services
            </Typography>
          </Link>
          {/* <HoverButton title="WHAT" href="/services" /> */}
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link href="/contact" className={classes.link}>
            <Typography variant="overline" className={classes.text}>
              contact
            </Typography>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link href="/gallery" className={classes.link}>
            <Typography variant="overline" className={classes.text}>
              gallery
            </Typography>
          </Link>
        </ListItem>
      </List>
    </div>
  )
}
