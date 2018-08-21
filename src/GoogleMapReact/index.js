import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './index.css'

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';



const MapContainer = (withGoogleMap((props) =>
  // map over props.freelancerResults to create an array of <Marker />s
  // include that below where you currently have just the one marker
  <GoogleMap
    center= {{lat:41.881832, lng: -87.623177}}
    zoom= {10}
  >

      <Marker position={{lat:41.881832, lng: -87.623177}}/>

  </GoogleMap>

))

export default MapContainer;