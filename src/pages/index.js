import React, { useEffect } from 'react'
import clsx from 'clsx'
import Bottombar from '../components/common/Bottombar'
import Topbar from '../components/common/Topbar'
import { makeStyles } from '@material-ui/core/styles'
import Contactbar from '../components/common/Contactbar'
import Partners from '../components/homePage/PartnersSlideShow'
import HomeIntro from '../components/homePage/HomeIntro'
import { Grid, Container } from '@material-ui/core'
import SelectiveServices from '../components/homePage/SelectiveServices'
import StepByStepGuide from '../components/homePage/StepByStepGuide'
import Benefits from '../components/homePage/Benefits'
import ServicesTour from '../components/homePage/ServicesTour'
import { Router } from 'next/router'

const useStyles = makeStyles(theme => ({
  box1bg: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.90)), url(${'dims.jpeg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
  },
  nobg1: {
    height: 'auto',
    [theme.breakpoints.down('xl')]: {
      marginTop: 150,
      marginBottom: 150,
    },
  },
  nobg2: {
    height: 'auto',
    // minHeight: '50vh',
    marginTop: 118,
    marginBottom: 104,
  },
  box3bg: {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.80) ), url(${'touchSmart.jpg'})`,
    backgroundSize: ' cover',
    backgroundPosition: 'center',
    [theme.breakpoints.down('sm')]: {
      minHeight: 200,
    },
    [theme.breakpoints.down('md')]: {
      minHeight: 600,
    },
    [theme.breakpoints.up('md')]: {
      minHeight: 700,
    },
    overflow: 'hidden',
  },
  selectiveServices: {
    position: 'relative',
    zIndex: '3',
  },
  selectiveServicesRaised: {
    margin: '-60px 0px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  homeIntro: {
    marginTop: 30,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 120,
    },
    [theme.breakpoints.up('sm')]: {
      marginBottom: 120,
      // paddingBottom: '10%',
    },
  },
  partners: {
    backgroundColor: 'transparent',
    position: 'relative',
    zIndex: '3',
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  minHeightTop: {
    [theme.breakpoints.down('sm')]: {
      minHeight: 400,
    },
    [theme.breakpoints.down('md')]: {
      minHeight: 500,
    },
    [theme.breakpoints.up('md')]: {
      minHeight: 600,
    },
  },
}))

export default function Index() {
  const classes = useStyles()
  // const selectiveServiceStyles = clsx(
  //   classes.selectiveServices,
  //   classes.selectiveServicesRaised
  // )

  useEffect(() => {
    const handleRouteChange = url => {
      return <div style={{ height: 200, width: 200, backgroundColor: 'red' }}>{url}</div>
    }

    Router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      Router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <React.Fragment>
      <div className={classes.box1bg}>
        <Grid
          container
          direction="column"
          alignItems="stretch"
          className={classes.minHeightTop}
        >
          <Grid item>
            <Contactbar />
          </Grid>
          <Grid item>
            <Topbar />
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justify="flex-end"
              alignItems="stretch"
              className={classes.homeIntro}
            >
              <Grid item>
                <HomeIntro />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div>
        <SelectiveServices />
      </div>
      <div className={classes.nobg1}>
        <StepByStepGuide />
      </div>
      <div className={classes.box3bg}>
        <Benefits />
      </div>
      <Container maxWidth="xl">
        <div className={classes.partners}>
          <Partners />
        </div>
      </Container>
      <div className={classes.nobg2}>
        <ServicesTour />
      </div>
      <Bottombar />
    </React.Fragment>
  )
}
