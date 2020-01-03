import React, { Component } from 'react'
import shouldPureComponentUpdate from 'react-pure-render/function'

const K_WIDTH = 10
const K_HEIGHT = 10

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '2px solid #f44336',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
}

export default class MapMarker extends Component {
  static defaultProps = {}

  shouldComponentUpdate = shouldPureComponentUpdate

  render() {
    return <div style={greatPlaceStyle}>{this.props.text}</div>
  }
}
