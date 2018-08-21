import React, { Component } from 'react';
import Search from '../Search'
class SearchContainer extends Component {
  constructor(){
    super();
    this.state = {
      restaurants: [],
      query: '',
      city: ''
    };
  }



  handleChange = async (e) => {
    try {
      this.setState({city: e.target.value})
      // console.log(this.state, 'this is state at the ---------> SearchContainer <------------')
    }catch(err){
      console.log(err, 'error at handleChange')
    }
  }

  // cl post request
  handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const searchResponse = await fetch('https://developers.zomato.com/api/v2.1/locations?query=' + "/search", {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const parsedResponse = await searchResponse.json();
      console.log('!!!!!!!!!! what up parsedResponse!!!!!!!!!!', parsedResponse)

      this.setState({restaurants: [...this.state, parsedResponse.restaurants]})
    }catch (err){
      console.log(err, '----->>> this is the query at SearchContainer')
    }
    // console.log(this.state.city, '-----> HERE ARE restaurants')

  }


  showModal = async (id) => {
    try{
      const showRestaurant = await fetch('https://api.yelp.com/v3/businesses/{id}' + "/search/" + this.state.restaurants.res_id, {
        method: 'GET',
        credentials: 'inlcude'
      })
    
    }catch(err){
      console.log(err, 'cannot show stupid!')
    }
  }

  render(){
    return(
      <div>
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />

      </div>
      )
  }
}



export default SearchContainer;