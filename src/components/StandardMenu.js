import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import HoverButton from './HoverButton'
import { List, ListItem } from '@material-ui/core'
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
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Link href="#" className={classes.link}>
            WHO
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <HoverButton title="WHAT" />
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link href="#" className={classes.link}>
            CONTACT
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link href="#" className={classes.link}>
            ARTICLES
          </Link>
        </ListItem>
      </List>
    </div>
  )
}
