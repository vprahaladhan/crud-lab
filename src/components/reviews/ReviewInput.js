import React, { Component } from 'react';
import { connect } from 'react-redux';

import Reviews from './Reviews';

export class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state.text)
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
        <input type="submit" value="Submit" />
      </form>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  addReview: text => dispatch({ type: 'ADD_REVIEW', text })
})

export default connect(null, mapDispatchToProps)(ReviewInput);