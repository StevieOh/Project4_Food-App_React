import React, { Component } from "react";
import RestaurantMap from '../RestaurantMap';
import RestaurantsList from '../RestaurantsList'
import Search from '../Search'
import SearchContainer from '../SearchContainer'
class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
      model: [],
      restaurants: [],
      search: ''
      // restaurantsFetch: false,
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
          // console.log(searchRestaurant, 'here is restaurants')

      const searchRestaurant = await fetch('https://chow-town-back.herokuapp.com/search', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const parsedResponse = await searchRestaurant.json();
      this.setState({restaurants: [...this.state.restaurants, parsedResponse.restaurants]});
  //
    } catch (err){
      console.log(err, '-login index---->>>>>error inside handleSubmit<<<<-------')
      }
  }

  getRestaurants = async() => {
    try{
      const restaurants = await fetch('https://chow-town-back.herokuapp.com/search', {

      })
      const restaurantsJson = await restaurants.json();

      // return restaurantsJson.
    } catch (err){
      console.log(err, 'error in catch block getRestaurants')
      return err
    }
  }
  render() {
    return (
      <div>
        <h1>HomeContainer Page</h1>
        <SearchContainer />

        <RestaurantMap google={this.props.google} markers={this.state.markers}/>
        <div className="restaurantContainerInHomeContainer">
        { this.state.restaurantsFetch ? this.state.restaurants.map((restaurant, i) => <RestaurantsList keys={i} restaurant={this.state.restaurants}/>) : <Search handleSubmit={this.handleSubmit} /> }
        <h1>List of restaurants in your area</h1>
        <RestaurantsList restaurants={this.state.restaurants}/>
      </div>


      </div>
    )
  }
}

export default HomeContainer;
