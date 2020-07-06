import { combineReducers } from 'redux';
import bicycleReducer from './bicycle';

// this function logic is to verify which reducer function it belongs...
// const limited = (reducer, predicate) => (state, action) => {
//   if (predicate(action)) {
//     return reducer(state, action);
//   }
//   return state;
// };

const mainReducer = combineReducers({
  data: bicycleReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    return {};
  }
  // verify if the user is logging out clear the entire state or return null/undefined
  return mainReducer(state, action);
};

export default rootReducer;
