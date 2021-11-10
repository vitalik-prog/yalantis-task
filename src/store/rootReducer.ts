import { combineReducers } from '@reduxjs/toolkit';
import { reducer as employeesReducer } from './employees';

const rootReducer = combineReducers({
  employees: employeesReducer,
});

export default rootReducer;
