import React from 'react'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    // marginLeft: theme.spacing(2),
    minWidth: 150,
    background: theme.palette.grey[100],
  },
}))

export default function HoverButton(props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          // aria-controls={open ? 'menu-list-grow' : undefined}
          // aria-haspopup="true"
          onMouseEnter={handleToggle}
          onMouseLeave={handleToggle}
          style={{ color: 'inherit' }}
          variant="text"
          disableFocusRipple={true}
        >
          {props.title}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          style={{ paddingTop: 10, paddingLeft: 40 }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'center bottom',
              }}
            >
              <Paper
                onMouseEnter={handleToggle}
                onMouseLeave={handleToggle}
                className={classes.paper}
              >
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>Sound System</MenuItem>
                    <MenuItem onClick={handleClose}>Lighting</MenuItem>
                    <MenuItem onClick={handleClose}>Electrical</MenuItem>
                    <MenuItem onClick={handleClose}>Security Camera</MenuItem>
                    <MenuItem onClick={handleClose}>Home Networking</MenuItem>
                    <MenuItem onClick={handleClose}>Central Vacuum</MenuItem>
                    <MenuItem onClick={handleClose}>Climate Control</MenuItem>
                    <MenuItem onClick={handleClose}>Home Theatre</MenuItem>
                    <MenuItem onClick={handleClose}>Smart Blinds</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  )
}
