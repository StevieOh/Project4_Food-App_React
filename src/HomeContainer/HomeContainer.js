import React, { Component } from "react";
import Search from '../Search'
import MapContainer from '../MapContainer'
import './index.css'

class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      searchLocation: '',
      searchTerm: ''
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

  handleChange = async (e) => {
    try {
      this.setState({[e.currentTarget.name]: e.currentTarget.value});
    }catch(err){
      console.log(err, 'error at handleChange')
    }
  }

  // cl post request
  handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const searchResponse = await fetch('http://localhost:8000/api/yelp/businesses/' + this.state.searchLocation + '/' + this.state.searchTerm + '/10', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const parsedResponse = await searchResponse.json();
      this.setState({restaurants: parsedResponse.restaurant_list})
    }catch (err){
      console.log(err, '----->>> this is the query at SearchContainer')
    }
  }

  render() {
    return (
      <div>

        <div className="restaurantContainer">

          <h1>HomeContainer Page</h1>
          <Search
            className="search"
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
          <MapContainer restaurants={this.state.restaurants} />
        </div>


      </div>
    )
  }
}

export default HomeContainer;
