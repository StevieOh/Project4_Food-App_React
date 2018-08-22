import React, { Component } from "react";
import Markers from "../Markers/index.js";

class RestaurantShow extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: []
    }
  }
  getRestaurant = async () => {
    try{
      const id = await this.props.match.params.id;
      const searchResponse = await fetch('http://localhost:8000/api/yelp/businesses/' + id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const json = await searchResponse.json();
      const restaurant = await [json.restaurant];
      return restaurant;
    }catch (err){
      console.log(err, '----->>> this is the query at SearchContainer')
    }
  }
  componentDidMount = () => {
    this.getRestaurant().then((data) => this.setState({restaurants: data}));
  }
  render() {
    console.log(this.state.restaurants);
    return (
      <div>
        <h1>Restaurant Show Page</h1>
          {this.state.restaurants.length > 0 ? <Markers google={this.props.google} restaurants={this.state.restaurants}/> : null}
          {this.state.restaurants.length > 0 ? <p>Name: {this.state.restaurants.name}</p> : null}
      </div>
    )
  }
}

export default RestaurantShow;
