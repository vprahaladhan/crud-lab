import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReviewsContainer from '../../containers/ReviewsContainer';

export class Review extends Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.deleteReview(this.props.review.id);
  }

  render() {
    const { review } = this.props;

    return (
      <div>
        <li>
          {review.text}
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

export default connect(null, mapDispatchToProps)(Review);

// class Review extends Component {

//   render() {
//     const { review } = this.props;

//     return (
//       <div>
//         <li>
//           {review.text}
//         </li>
//         <button> X </button>
//       </div>
//     );
//   }

// };

// export default Review;