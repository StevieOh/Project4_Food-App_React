import React from "react";
import { Map, Marker } from 'google-maps-react';

const Markers = (props) => {

  let initialLatitude = "";
  let initialLongitude = "";

  const markers = props.restaurants.map((restaurant, index) => {

    const name = restaurant.name;
    const latitude = restaurant.coordinates.latitude;
    const longitude = restaurant.coordinates.longitude;
    if(index === 0){
      initialLatitude = latitude;
      initialLongitude = longitude;
    }
    return <Marker key={index} position={{lat: latitude, lng: longitude}} icon={{
      url: "https://thumbs.gfycat.com/WellgroomedSeveralFrigatebird-size_restricted.gif",
      anchor: new props.google.maps.Point(32,32),
      scaledSize: new props.google.maps.Size(64,64)
    }}/>
  });
  console.log(initialLatitude)
  console.log(initialLongitude)
  return(
    <Map google={props.google} style={{width: "400px", height: "400px", position: "relative"}} initialCenter={{lat: initialLatitude, lng: initialLongitude}}>
    { markers }
    </Map>
  );
}


export default Markers;

