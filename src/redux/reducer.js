import { combineReducers } from '@reduxjs/toolkit';

import { carsReducer } from './cars/carsSlise';

export const rootReducer = combineReducers({
  cars: carsReducer,
});
