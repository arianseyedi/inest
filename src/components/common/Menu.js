import React from 'react'
import StandardMenu from './StandardMenu'
import MobileMenu from './MobileMenu'

export default function Menu() {
  return (
    <React.Fragment>
      <StandardMenu />
      <MobileMenu />
    </React.Fragment>
  )
}
