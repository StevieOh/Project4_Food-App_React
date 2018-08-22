import React, { Component } from "react";
import MapContainer from "../MapContainer/index.js";

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
        {this.state.restaurants.length > 0 ?  <h1>{this.state.restaurants[0].name}</h1> : null}
        {this.state.restaurants.length > 0 ?  <h3>{this.state.restaurants[0].price}</h3> : null}
        {this.state.restaurants.length > 0 ?  <h3>Rating: {this.state.restaurants[0].rating}</h3> : null}

          {this.state.restaurants.length > 0 ? <MapContainer restaurants={this.state.restaurants} /> : null}

          {this.state.restaurants.length > 0 ? <h3>Phone Number: {this.state.restaurants[0].phone}</h3> : null}
          {this.state.restaurants.length > 0 ? <h3>Address: {this.state.restaurants[0].location.address1} {this.state.restaurants[0].location.city}, {this.state.restaurants[0].location.state} {this.state.restaurants[0].zip_code}</h3> : null}
          {this.state.restaurants.length > 0 ? <img src={this.state.restaurants[0].image_url} className="restaurant-image"/> : null}
      </div>
    )
  }
}

export default RestaurantShow;
