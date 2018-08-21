import React, {Component} from 'react';
import './index.css'; 
import { withGoogleMap, GoogleMap } from 'react-google-maps';
// this will contain profile elements and components
class RestaurantMap extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
     ));
    return (
      <div>

        <h1>RestaurantMap Page</h1>
        <GoogleMapExample containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }mapElement={ <div style={{ height: `100%` }} /> }/>
      </div>
    )
  }
}

export default RestaurantMap;
