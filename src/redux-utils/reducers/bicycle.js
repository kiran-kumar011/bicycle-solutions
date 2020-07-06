import { createReducer } from '@reduxjs/toolkit';
import { bicycleTypes } from '../types';

const initialState = {
  services: [],
  bicycles: [],
  isFetching: false,
};

const reducer = createReducer(initialState, {
  [bicycleTypes.request]: (state) => {
    state.isFetching = true;
    console.log('action dispatched');
  },
  [bicycleTypes.success]: (state, action) => {
    state.isFetching = false;
    state.bicycles = action.payload.data.bicycles;
    state.services = action.payload.data.services;
  },
  [bicycleTypes.error]: (state) => {
    state.isFetching = false;
  },
});

export default reducer;
