import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './index.css'

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class GoogleMapReact extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMapReact;