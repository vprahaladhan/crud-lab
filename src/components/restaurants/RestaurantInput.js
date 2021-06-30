import React, { Component } from 'react';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({ type: 'ADD_RESTAURANT', text })
})

export default connect(null, mapDispatchToProps)(RestaurantInput);