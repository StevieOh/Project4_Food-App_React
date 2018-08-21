import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './index.css';

class RestaurantMap extends Component{
  // Create state that stores the restaurants as an array
  constructor(){
    super();
    this.state = {
      restaurants: []
    }
  }
  findRestaurants = async (evt) => {
    try{

      const foundRestaurants = await fetch('GET https://api.yelp.com/v3/autocomplete?text=del&latitude=41.881832&longitude=-87.623177');
      this.setState({restaurants: foundRestaurants});
      // console.log(this.state, ' this is this.state in RestaurantMap and the findRestaurants function');
      return this.state;
    }catch(err){
      console.log(err, ' this is an error in the RestaurantMap findRestaurants function');
    }
  }

  render(){
    console.log(this.state.restaurants, " this is this.state in RestaurantMap");
    // this.findRestaurants()
    return(
      <div >

        <Map google={this.props.google} zoom={14}>

         <Marker onClick={this.onMarkerClick}
                 name={'Current location'} />

         <InfoWindow onClose={this.onInfoWindowClose}>

         </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBpS9m_h_obP2J-O-x3-P2HaEZP1yo7CPU&callback=initMap')
})(RestaurantMap)