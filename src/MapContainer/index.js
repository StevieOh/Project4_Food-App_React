import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import Markers from '../Markers'
// import './index.css'

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
      const searchIPAddress = await fetch('http://localhost:8000/api/ip/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const parsedIPAddress = await searchIPAddress.json();
      const zip = await parsedIPAddress.ip_address.zip

      const searchResponse = await fetch('http://localhost:8000/api/yelp/businesses/' + zip + '/restaurant/10', {
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

  componentWillReceiveProps(nextProps){
    if(this.props.restaurants !== nextProps.restaurants){
      this.setState({restaurants: nextProps.restaurants})
    }
  }

  render() {
        // <h1>MapContainer Page</h1>
    return (
      <div className="mapContainer">
        <div style={{display: "flex", justifyContent: "center"}}>
          <div style={{height: "400px", width: "400px"}}>
            {this.state.restaurants.length > 0 ? <Markers google={this.props.google} restaurants={this.state.restaurants}/> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
apiKey: apiKey
})(MapContainer)
