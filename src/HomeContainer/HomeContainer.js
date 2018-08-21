import React, { Component } from "react";
import RestaurantMap from '../RestaurantMap';
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

      const searchRestaurant = await fetch('GET https://api.yelp.com/v3/autocomplete?text=del&latitude=37.786882&longitude=-122.399972', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
                Authorization : ('a3x1b8b59MxxH8FUk_vCZNco6_UyvcCPxqBonIz6F7zKie57BtlRFFw7CORC0_BQiAgOeXytSl78DX8DXzvPPGwmWIpeHDYBG8DZjr_54Ln7jUnMOC_4Bcdl0LV1W3Yx'),
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
      const restaurants = await fetch('GET https://api.yelp.com/v3/autocomplete?text=del&latitude=37.786882&longitude=-122.399972', {
          Authorization : ('a3x1b8b59MxxH8FUk_vCZNco6_UyvcCPxqBonIz6F7zKie57BtlRFFw7CORC0_BQiAgOeXytSl78DX8DXzvPPGwmWIpeHDYBG8DZjr_54Ln7jUnMOC_4Bcdl0LV1W3Yx')
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
        <div className="restaurantContainer">
      </div>


      </div>
    )
  }
}

export default HomeContainer;
