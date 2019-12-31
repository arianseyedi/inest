import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import StandardMenu from './StandardMenu'
import MobileMenu from './MobileMenu'

// const useStyles = makeStyles(theme => ({
//   root: {},
// }))

export default function Menu() {
  // const classes = useStyles()

  return (
    <React.Fragment>
      <StandardMenu />
      <MobileMenu />
    </React.Fragment>
  )
}
