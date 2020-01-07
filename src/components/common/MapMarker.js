import React, { Component } from 'react'
import shouldPureComponentUpdate from 'react-pure-render/function'
import MapPinIcon from '../../resource/MapPinIcon'
import {Tooltip, Button} from "@material-ui/core"

const K_WIDTH = 40
const K_HEIGHT = 40

const K_WIDTH_T = 10
const K_HEIGHT_T= 10

const pinStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2 -11,
  top: -K_HEIGHT / 2 -30,
  borderRadius: K_HEIGHT,
  fontSize: 16,
}

const ps = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH_T,
  height: K_HEIGHT_T,
  left: -K_WIDTH_T / 2,
  top: -K_HEIGHT_T / 2,

  border: '2px solid #f44336',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 236,
  fontWeight: 'bold',
  padding: 4,
}

export default class MapMarker extends Component {
  static defaultProps = {}

  shouldComponentUpdate = shouldPureComponentUpdate

  render() {
    return <Tooltip title="57 Glen Cameron Rd #16" target="_blank"interactive><a href="https://www.google.com/maps/place/57+Glen+Cameron+Rd+%2316,+Thornhill,+ON+L3T+1P3/@43.8060716,-79.4173982,18z/data=!4m5!3m4!1s0x882b2cf051087011:0xa99e1e7786b42ee4!8m2!3d43.8059748!4d-79.41632?shorturl=1">
    <div style={ps}><MapPinIcon style={pinStyle}/></div></a>
  </Tooltip>
  }
}
