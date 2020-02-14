import React from 'react'
import clsx from 'clsx'
import Bottombar from '../components/common/Bottombar'
import { makeStyles } from '@material-ui/core/styles'
import GetQuote from '../components/servicesPage/GetQuote'
import AboutTop from '../components/about/AboutTop'
import AboutContent from '../components/about/AboutContent'
import Head from 'next/head'

const useStyles = makeStyles(theme => ({
  box1bg: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.90)), url(${'gallery/stairwayToHeaven.jpg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  selectiveServices: {
    position: 'relative',
    zIndex: '3',
  },
  selectiveServicesRaised: {
    margin: '-80px 30px 80px ',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
}))

export default function Services() {
  const classes = useStyles()
  const selectiveServiceStyles = clsx(
    classes.selectiveServices,
    classes.selectiveServicesRaised
  )
  return (
    <React.Fragment>
      <Head>
        <title>about</title>
      </Head>
      <div className={classes.box1bg}>
        <AboutTop />
      </div>
      <AboutContent />
      <GetQuote />
      <Bottombar />
    </React.Fragment>
  )
}
