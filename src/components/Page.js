import React from 'react'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core'

const PageBase = props => {
  const getRootClass = () => {
    const { classes, scrollable = false } = props

    return clsx(classes.root, {
      [classes.isScrollable]: scrollable,
    })
  }

  const getRootStyle = () => {
    const { backgroundImage } = props

    return {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
    }
  }
  const { children } = props

  return (
    <div className={getRootClass()} style={getRootStyle()}>
      {children}
    </div>
  )
}

export const Page = withStyles(({ spacing, palette }) => ({
  root: {
    flexGrow: 1,
    minWidth: 0, // So the Typography noWrap works
    paddingTop: 0,
    backgroundColor: palette.background.default,
    height: '100%',
  },
  isScrollable: {
    overflowY: 'scroll',
  },
}))(PageBase)
