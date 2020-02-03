import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'
import { withStyles } from '@material-ui/styles'

const LAT = 43.806058
const LNG = -79.416315

const styles = theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      height: 100,
      width: 175,
    },
    [theme.breakpoints.up('md')]: {
      height: 175,
      width: 200,
    },
    [theme.breakpoints.up('lg')]: {
      height: 175,
      width: 300,
    },
  },
})

class MapBase extends Component {
  static defaultProps = {
    center: {
      lat: LAT,
      lng: LNG,
    },
    zoom: 13,
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC0RKgTDjaovLgJCt8eys3r0U__Il5gJC8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MapMarker lat={LAT} lng={LNG} text={''} />
        </GoogleMapReact>
      </div>
    )
  }
}

export default withStyles(styles)(MapBase)
