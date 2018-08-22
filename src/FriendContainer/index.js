import React, { Component } from "react";

class Friend extends Component {
  constructor() {
    super();
    this.state = {
      friendships: []
    }
  }
  getDefaultRestaurants = async (e) => {
    try{
      const searchResponse = await fetch('http://localhost:8000/api/friendship/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const parsedResponse = await searchResponse.json();
      const friendships = await parsedResponse.user_id2;
      return friendships;
    }catch (err){
      console.log(err, '----->>> this is the query at SearchContainer')
    }
  }
  componentDidMount = (e) => {
    this.getDefaultRestaurants().then((data) => this.setState({friendships: data}));
  }
  friendList = () => {
    const friendList = this.state.friendList.map((friend, i) => {
      return  <li key={friend._id}>
                <p>{friend.user_id2}</p>
              </li>
            });
            return friendList;
  }
  render() {
    return (
      <div>
        <h1>Friend Page</h1>
        {this.state.friendships.length > 1 ? this.friendList() : null}
      </div>
    )
  }
}

export default Friend;
