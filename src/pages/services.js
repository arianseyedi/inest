import React from 'react'
import clsx from 'clsx'
import Bottombar from '../components/common/Bottombar'
import { makeStyles } from '@material-ui/core/styles'
import Partners from '../components/homePage/PartnersSlideShow'
import SelectiveServices from '../components/homePage/SelectiveServices'
import StepByStepGuide from '../components/homePage/StepByStepGuide'
import Benefits from '../components/homePage/Benefits'
import ServicesTour from '../components/homePage/ServicesTour'
import ServicesTop from '../components/services/ServicesTop'
import ServicesContainer from '../components/services/ServicesContainer'
import { Divider } from '@material-ui/core'
import ServicesOverview from '../components/services/ServicesOverview'
import LightingService from '../components/services/LightingService'
import ElectricalService from '../components/services/ElectricalService'
import HomeTheatreService from '../components/services/HomeTheatreService'
import NetworkService from '../components/services/NetworkService'
import SoundService from '../components/services/SoundService'
import VacuumService from '../components/services/VacuumService'
import ClimateControlService from '../components/services/ClimateControlService'
import SmartBlindsService from '../components/services/SmartBlindsService'
import SecurityCameraService from '../components/services/SecurityCameraService'
import GetQuote from '../components/services/GetQuote'

const useStyles = makeStyles(theme => ({
  box1bg: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.90)), url(${'gallery/home.jpg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  selectiveServices: {
    background: '#FFFFFF',
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
  const servicesListRaw = [
    ServicesOverview,
    LightingService,
    ElectricalService,
    HomeTheatreService,
    NetworkService,
    SecurityCameraService,
    SoundService,
    VacuumService,
    SmartBlindsService,
    ClimateControlService,
  ]
  const end = servicesListRaw.length - 1
  const servicesList = servicesListRaw.map((Component, index) => (
    <React.Fragment key={`service-fgmt-${index}`}>
      {index % 2 ? (
        <Component key={`component-${index}`} />
      ) : (
        <Component reverse key={`component-${index}`} />
      )}
      {end !== index ? <Divider key={`component-div-${index}`} /> : null}
    </React.Fragment>
  ))
  return (
    <React.Fragment>
      <div className={classes.box1bg}>
        <ServicesTop />
      </div>
      <div className={selectiveServiceStyles}>
        <ServicesContainer>{servicesList}</ServicesContainer>
      </div>
      <GetQuote />
      <Bottombar />
    </React.Fragment>
  )
}
