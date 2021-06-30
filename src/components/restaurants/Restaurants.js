import React, { Component } from 'react';
import { connect } from 'react-redux';

import Restaurant from './Restaurant';

export class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(res => <Restaurant restaurant={res} />)}
      </ul>
    );
  }
};

export default connect(state => ({ restaurants: state.restaurants }))(Restaurants);