import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/';
import HomeContainer from "./HomeContainer/HomeContainer.js";
import Login from './Login';
import Footer from './Footer';
import ProfileContainer from './ProfileContainer';
import FriendContainer from './FriendContainer';
import RestaurantShow from './RestaurantShow';

import { Route, Switch } from "react-router-dom";
const My404 = () => {
  return(
    <div>
      You Get Your Damn Hands Off Her.. Bifff
    </div>

    )
}

class App extends Component {
  constructor(){
    super();

    this.state = {
      logged: false,
      username: '',
      location: ''
    }
  }
  login = (username) => {
    // we will setState of this component, but we will call it in the login
    // component
    console.log('login function in app is working', username);
    // the last thing that you want to do in your function
    this.setState({
      username: username,
      logged: true
    });
  }



  render() {
    return (
      <div className="App">
      <Header className="App-header"/>

        <Switch>
        <Route exact path='/' component={ HomeContainer } />
        <Route exact path='/profile' component={ ProfileContainer } />
        <Route exact path='/restaurant' component={ RestaurantShow } />
        {this.state.logged ? <HomeContainer username={this.state.username}  /> : <Login login={this.login}/>} } />
        <Route component={ My404 }/>
        </Switch>
        <Footer className="App-footer"/>
      </div>
    );
  }
}

export default App;


