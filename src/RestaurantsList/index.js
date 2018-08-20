import React from 'react';

const RestaurantsList = (props) => {
  let listrestaurants;
  if(props.restaurants[0]) {
    listrestaurants = props.restaurants[0].map((restaurant, index) =>{
      return (
        <li key={index}>
          <span>{restaurant.restaurant.name}</span>

        </li>
        );
    })

  }
  return (
    <div>
      <ul>
        {listrestaurants}
      </ul>
    </div>
    )
};

export default RestaurantsList