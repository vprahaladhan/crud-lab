import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReviewsContainer from '../../containers/ReviewsContainer';

export class Restaurant extends Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.deleteRestaurant(this.props.restaurant.id);
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <form onSubmit={this.handleSubmit} className="delete-form">
            <button type="submit" className="delete-button"> X </button>
          </form>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  deleteRestaurant: id => dispatch({ type: 'DELETE_RESTAURANT', id })
});

export default connect(null, mapDispatchToProps)(Restaurant);