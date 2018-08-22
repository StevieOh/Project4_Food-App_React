import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import Markers from '../Markers'
// import './index.css'

const  apiKey = "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg";

class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
    }
  }
  componentDidMount = () => {
    this.setState({restaurants: this.props.restaurants});
  }

  componentWillReceiveProps(nextProps){
    if(this.props.restaurants !== nextProps.restaurants){
      this.setState({restaurants: nextProps.restaurants})
    }
  }

  render() {
        // <h1>MapContainer Page</h1>
    console.log();
    return (
      <div className="mapContainer">
        <div style={{display: "flex", justifyContent: "center"}}>
          <div style={{height: "400px", width: "400px"}}>
            {this.state.restaurants.length > 0 ? <Markers google={this.props.google} restaurants={this.state.restaurants}/> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
apiKey: apiKey
})(MapContainer)
