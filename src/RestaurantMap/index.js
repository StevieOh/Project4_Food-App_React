import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker'

class RestaurantMap extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <h1>RestaurantMap Page</h1>
        <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
          <GoogleMapReact lat={59.955413} lng={30.337844} text={'Kreyser Avrora'}/>

        </GoogleMapReact>

      </div>
    )
  }
}
// const Marker = props => {
//   return <div className="SuperAwesomePin"></div>
// }
export default RestaurantMap;
