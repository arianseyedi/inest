import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import MenuIcon from '@material-ui/icons/Menu'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    '&:hover': {
      cursor: 'pointer',
    },
    marginRight: theme.spacing(0),
  },
  paper: {
    fontWeight: 'bold',
  },
}))

export default function MobileMenu() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    right: false,
  })

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setState({ ...state, [side]: open })
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['About', 'Services', 'Contact', 'Gallery'].map((text, index) => (
          <a
            href={`/${text.toLowerCase()}`}
            key={`${text}-m-menu-item`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {index < 3 ? (
              <React.Fragment>
                <ListItem button>
                  <ListItemText primary={text} />
                </ListItem>
                <Divider></Divider>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <ListItem button>
                  <ListItemText primary={text} />
                </ListItem>
              </React.Fragment>
            )}
          </a>
        ))}
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      {!state.right && (
        <MenuOpenIcon className={classes.menuButton} onClick={toggleDrawer('right', true)} />
      )}
      {state.right && <MenuIcon className={classes.menuButton} />}
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
        PaperProps={{ style: { backgroundColor: 'black', opacity: '0.75', color: 'white' } }}
      >
        {sideList('right')}
      </SwipeableDrawer>
    </div>
  )
}
