import { createAction } from '@reduxjs/toolkit';
import { bicycleTypes } from '../types';

const getAllData = () => {
  const action = createAction(bicycleTypes.request)();
  return action;
};

export { getAllData };
