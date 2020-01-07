import React from 'react'
import { Fade } from 'react-slideshow-image'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Container } from '@material-ui/core'
import './Partners.scss'

const useStyles = makeStyles(theme => ({
  title: {
    background: theme.palette.grey[100],
    textAlign: 'center',
    padding: 10,
    fontSize: 28,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
}))
const slideImages = [
  'partners/ring.png',
  'partners/sonos.png',
  'partners/acceleration.jpg',
  'partners/nest-logo.png',
  'partners/esa.jpg',
  'partners/denon_logo.png',
  'partners/control4.png',
  'partners/hikvision.png',
  'partners/dsc_logo2.jpg',
]

const fadeProperties = {
  duration: 2500,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`)
  },
}
export default function Slideshow() {
  const classes = useStyles()

  return (
    <div className="slide-container" id="unselectable-text">
      <Typography classes={{ root: classes.title }} variant="body1" gutterBottom>
        Our Partners
      </Typography>
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="container-box">
            <div className="box">
              <img className="img-box" src={`${slideImages[0]}`} />
            </div>
            <div className="box">
              <img className="img-box" src={`${slideImages[1]}`} />
            </div>
            <div className="box">
              <img className="img-box" src={`${slideImages[2]}`} />
            </div>
            <div className="box">
              <img className="img-box" src={`${slideImages[3]}`} />
            </div>
            <div className="box">
              <img className="img-box" src={`${slideImages[4]}`} />
            </div>
          </div>
        </div>
        <div className="each-fade">
          <div className="container-box">
            <div className="box-2">
              <img className="img-box" src={`${slideImages[8]}`} />
            </div>
            <div className="box-2">
              <img className="img-box" src={`${slideImages[7]}`} />
            </div>
            <div className="box-2">
              <img className="img-box" src={`${slideImages[6]}`} />
            </div>
            <div className="box-2">
              <img className="img-box" src={`${slideImages[5]}`} />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}
