import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Container, useMediaQuery } from '@material-ui/core'
import './Partners.scss'
import Fade from '../common/imageSlideshow/fade'

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
  onChange: (oldIndex, newIndex) => {},
}
export default function Slideshow() {
  const classes = useStyles()
  const xsmDown = useMediaQuery(theme => theme.breakpoints.down('xs'))
  return (
    <div className="slide-container" id="unselectable-text">
      <Typography classes={{ root: classes.title }} variant="body1" gutterBottom>
        Our Partners
      </Typography>
      {xsmDown ? (
        <Fade {...fadeProperties}>
          <div className="each-fade">
            <div className="container-box">
              <div className="box-3">
                <a href="https://ring.com/">
                  <img className="img-box" src={`${slideImages[0]}`} />
                </a>
              </div>
              <div className="box-3">
                <a href="https://www.sonos.com/en-ca/home">
                  <img className="img-box" src={`${slideImages[1]}`} />
                </a>
              </div>
              <div className="box-3">
                <a href="http://www.accelerationelectric.com/">
                  <img className="img-box" src={`${slideImages[2]}`} />
                </a>
              </div>
            </div>
          </div>
          <div className="each-fade">
            <div className="container-box">
              <div className="box-3">
                <a href="https://nest.com/">
                  <img className="img-box" src={`${slideImages[3]}`} />
                </a>
              </div>
              <div className="box-3">
                <a href="https://www.esasafe.com/">
                  <img className="img-box" src={`${slideImages[4]}`} />
                </a>
              </div>
              <div className="box-3">
                <a href="https://ca.denon.com/ca">
                  <img className="img-box" src={`${slideImages[5]}`} />
                </a>
              </div>
            </div>
          </div>
          <div className="each-fade">
            <div className="container-box">
              <div className="box-3">
                <a href="https://www.control4.com/">
                  <img className="img-box" src={`${slideImages[6]}`} />
                </a>
              </div>
              <div className="box-3">
                <a href="https://ca.hikvision.com/en">
                  <img className="img-box" src={`${slideImages[7]}`} />
                </a>
              </div>
              <div className="box-3">
                <a href="https://www.dsc.com/">
                  <img className="img-box" src={`${slideImages[8]}`} />
                </a>
              </div>
            </div>
          </div>
        </Fade>
      ) : (
        <Fade {...fadeProperties}>
          <div className="each-fade">
            <div className="container-box">
              <div className="box">
                <a href="https://ring.com/">
                  <img className="img-box" src={`${slideImages[0]}`} />
                </a>
              </div>
              <div className="box">
                <a href="https://www.sonos.com/en-ca/home">
                  <img className="img-box" src={`${slideImages[1]}`} />
                </a>
              </div>
              <div className="box">
                <a href="http://www.accelerationelectric.com/">
                  <img className="img-box" src={`${slideImages[2]}`} />
                </a>
              </div>
              <div className="box">
                <a href="https://nest.com/">
                  <img className="img-box" src={`${slideImages[3]}`} />
                </a>
              </div>
              <div className="box">
                <a href="https://www.esasafe.com/">
                  <img className="img-box" src={`${slideImages[4]}`} />
                </a>
              </div>
            </div>
          </div>
          <div className="each-fade">
            <div className="container-box">
              <div className="box-2">
                <a href="https://www.dsc.com/">
                  <img className="img-box" src={`${slideImages[8]}`} />
                </a>
              </div>
              <div className="box-2">
                <a href="https://ca.hikvision.com/en">
                  <img className="img-box" src={`${slideImages[7]}`} />
                </a>
              </div>
              <div className="box-2">
                <a href="https://www.control4.com/">
                  <img className="img-box" src={`${slideImages[6]}`} />
                </a>
              </div>
              <div className="box-2">
                <a href="https://ca.denon.com/ca">
                  <img className="img-box" src={`${slideImages[5]}`} />
                </a>
              </div>
            </div>
          </div>
        </Fade>
      )}
    </div>
  )
}
