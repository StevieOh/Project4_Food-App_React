import React, { Component } from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import GoogleMapReact from 'google-map-react';
import './index.css'

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
export class GoogleMap extends Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={style}>
        <Map google={this.props.google}
          />
      </div>
    )
  }
}

export default GoogleAPI({
  apiKey: "AIzaSyBpS9m_h_obP2J-O-x3-P2HaEZP1yo7CPU&callback=initMap"
})(GoogleMap)