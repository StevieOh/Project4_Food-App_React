import React, { Component } from "react";
import RestaurantMap from '../RestaurantMap';

class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
      model: []
    }
  }

  render() {
    return (
      <div>
        <h1>HomeContainer Page</h1>
        <RestaurantMap />

      </div>
    )
  }
}

export default HomeContainer;
