import React, { Component } from 'react';
// {Component} desctructering --> es6 desctruring
// Now we have Component in a variable, otherwise we would have to do
// React.Component

class Login extends Component {
  constructor(){
    // calling super lets you use this inside constructor
    super();

    this.state = {
      username: '',
      password: ''
    }
  }
  handleChange = (e) => {
    // e.target.value, e.target.name
      // arrow functions allow you to use this
      // which you will have to for this.setState

      // computed properties, es6
      this.setState({[e.target.name]: e.target.value});

      // var someObject = {}
      // someObject[username] = e.target.username

  }
  handleSubmit = (e) => {
    // this will stop our form from submitting a request,
    // and refreshing the page
    e.preventDefault();

    // we are calling the login function that we created in
    // App.js, and we sent down as props in order to lift our state
    this.props.login(this.state.username);

  }
  render(){

    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='username' onChange={this.handleChange} value={this.state.username} placeholder='username'/>
        <input type='password' name='password' onChange={this.handleChange} value={this.state.password} placeholder='password'/>
        <input type='submit' value='Submit'/>
      </form>
      )
  }
};


export default Login;