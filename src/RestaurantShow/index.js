import React, { Component } from "react";

class RestaurantShow extends Component {
  constructor() {
    super();
    this.state = {
      restaurant: ""
    }
  }
  getRestaurant = async () => {
    try{
      const id = await this.props.match.params.id;
      console.log(id);
      const searchResponse = await fetch('http://localhost:8000/api/yelp/businesses/' + id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const json = await searchResponse.json();
      const restaurant = await json.restaurant;
      return restaurant;
    }catch (err){
      console.log(err, '----->>> this is the query at SearchContainer')
    }
  }
  componentDidMount = () => {
    this.getRestaurant().then((data) => this.setState({restaurant: data}));
  }
  render() {
    console.log("rendered");
    return (
      <div>
        <h1>Restaurant Show Page</h1>
          {this.state.restaurant != "" ? <p>Name: {this.state.restaurant.name}</p> : null}
      </div>
    )
  }
}

export default RestaurantShow;
