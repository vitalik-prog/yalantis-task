import { combineReducers } from '@reduxjs/toolkit';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { reducer as employeesReducer } from './employees';

const rootReducer = combineReducers({
  employees: employeesReducer,
  toastr: toastrReducer,
});

export default rootReducer;
