import cuid from 'cuid';
import { combineReducers } from 'redux';

function manageRestaurants(state = [], action) {
  switch(action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {
        id: cuid(),
        text: action.text
      }
      return state.concat(restaurant)

    case 'DELETE_RESTAURANT':
      return state.filter(res => res.id !== action.id)   

    default:
      return state;
  }
};

function manageReviews(state = [], action) {
  switch(action.type) {
    case 'ADD_REVIEW':
      const review = {
        id: cuid(),
        restaurantId: action.restaurantId,
        text: action.text
      }
      return state.concat(review)

    case 'DELETE_REVIEW':
      return state.filter(revue => revue.id !== action.id)   

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  restaurants: manageRestaurants,
  reviews: manageReviews 
});

export default rootReducer;