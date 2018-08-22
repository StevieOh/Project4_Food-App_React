import React from "react";
import { Map, Marker } from 'google-maps-react';

const Markers = (props) => {

  let initialLatitude = "";
  let initialLongitude = "";

  const markers = props.restaurants.map((restaurant, index) => {
    const id = restaurant.id
    const name = restaurant.name;
    const latitude = restaurant.coordinates.latitude;
    const longitude = restaurant.coordinates.longitude;
    if(index === 0){
      initialLatitude = latitude;
      initialLongitude = longitude;
    }
    return <Marker key={index} label={name} id={id} onClick={() => window.location = 'restaurant/' + id} position={{lat: latitude, lng: longitude}} title={name} icon={{
      url: "https://thumbs.gfycat.com/WellgroomedSeveralFrigatebird-size_restricted.gif",
      anchor: new props.google.maps.Point(32,32),
      scaledSize: new props.google.maps.Size(64,64)
    }}/>

  });
  console.log(initialLatitude)
  console.log(initialLongitude)
  return(
    <Map google={props.google} style={{width: "400px", height: "400px", position: "relative"}} zoom={13} center={{lat: initialLatitude, lng: initialLongitude}} initialCenter={{lat: initialLatitude, lng: initialLongitude}}>
    { markers }
    </Map>
  );
}


export default Markers;
