import { combineReducers } from '@reduxjs/toolkit';
import { reducer as employeesReducer } from './employees';

const rootReducer = combineReducers({
  auth: employeesReducer,
});

export default rootReducer;
