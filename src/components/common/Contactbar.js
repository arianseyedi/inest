import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import Contacts from '../homePage/Contacts'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: 25,
  },
  bg: {
    color: theme.palette.text.secondary,
    background: 'rgba(255,255,255, 1)',
  },
  contactBar: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}))

export default function Contactbar() {
  const classes = useStyles()

  return (
    <div className={classes.bg}>
      <Container maxWidth="lg" className={classes.contactBar}>
        <div className={classes.root}>
          <Contacts />
        </div>
      </Container>
    </div>
  )
}
