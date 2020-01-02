import React from 'react'
import clsx from 'clsx'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ProTip from '../components/ProTip'
import Link from '../components/Link'
import Bottombar from '../components/Bottombar'
import Topbar from '../components/Topbar'
import { makeStyles } from '@material-ui/core/styles'
import Contactbar from '../components/Contactbar'
import Partners from '../components/PartnersSlideShow'
import HomeIntro from '../components/HomeIntro'
import { Grid } from '@material-ui/core'
import SelectiveServices from '../components/SelectiveServices'
import StepByStepGuide from '../components/StepByStepGuide'
import Benefits from '../components/Benefits'
import ServicesTour from '../components/ServicesTour'

const useStyles = makeStyles(theme => ({
  box1bg: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.90)), url(${'dims.jpeg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
  },
  nobg1: {
    height: 'auto',
    minHeight: '50vh',
    marginTop: 150,
  },
  nobg2: {
    height: 'auto',
    // minHeight: '50vh',
    marginTop: 150,
    marginBottom: 64,
  },
  box3bg: {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.80) ), url(${'touchSmart.jpg'})`,
    backgroundSize: ' cover',
    backgroundPosition: 'center',
    minHeight: '800px',
    overflow: 'hidden',
  },
  selectiveServices: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3',
  },
  selectiveServicesRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  homeIntro: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 80,
    },
    [theme.breakpoints.up('sm')]: {
      minHeight: '40vh',
    },
  },
}))

export default function Index() {
  const classes = useStyles()
  const selectiveServiceStyles = clsx(
    classes.selectiveServices,
    classes.selectiveServicesRaised
  )
  return (
    <React.Fragment>
      <div className={classes.box1bg}>
        <Grid container direction="column" style={{ minHeight: '80vh' }}>
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
      <div classNames={selectiveServiceStyles}>
        <SelectiveServices />
      </div>
      <div className={classes.nobg1}>
        <StepByStepGuide />
      </div>
      <div className={classes.box3bg}>
        <Benefits />
      </div>
      <div className={selectiveServiceStyles}>
        <Partners />
      </div>
      <div className={classes.nobg2}>
        <ServicesTour />
      </div>
      <Bottombar />
    </React.Fragment>
  )
}
