import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import Markers from '../Markers'

const  apiKey = "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg";

class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      loaded: false
    }

  }
  getDefaultRestaurants = async (e) => {
    try{
      const searchResponse = await fetch('http://localhost:8000/api/yelp/businesses/60640/restaurant/10', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const parsedResponse = await searchResponse.json();
      const restaurants = await parsedResponse.restaurant_list;
      return restaurants
    }catch (err){
      console.log(err, '----->>> this is the query at SearchContainer')
    }
  }
  componentDidMount = (e) => {
    this.getDefaultRestaurants().then((data) => this.setState({restaurants: data}));
  }

  render() {
    return (
      <div>
        <h1>MapContainer Page</h1>
        {this.state.restaurants.length > 0 ? <Markers google={this.props.google} restaurants={this.state.restaurants}/> : null}

        
      </div>
    )
  }
}

export default GoogleApiWrapper({
apiKey: apiKey
})(MapContainer)
