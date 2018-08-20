import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/';
import HomeContainer from "./HomeContainer/HomeContainer.js";
import Login from './Login';
import Footer from './Footer';





class App extends Component {
  constructor(){
    super();

    this.state = {
      logged: false,
      username: ''
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
        {this.state.logged ? <HomeContainer username={this.state.username} /> : <Login login={this.login}/>}

        <Footer className="App-footer"/>
      </div>
    );
  }
}

export default App;
