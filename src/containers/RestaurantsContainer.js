import React, { Component } from 'react';

import Restaurants from '../components/restaurants/Restaurants';
import RestaurantInput from '../components/restaurants/RestaurantInput';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput />
        <Restaurants />
      </div>
    )
  }
}

export default RestaurantsContainer;