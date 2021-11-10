import { createSlice } from '@reduxjs/toolkit';
import { DataStatus } from '../../enums';
import { Employee } from '../../common/types';
import { getEmployees } from './actions';

type State = {
  dataStatus: DataStatus;
  employees: Employee[] | [];
};

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  employees: [],
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmployees.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    });
    builder.addCase(getEmployees.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.employees = action.payload;
    });
    builder.addCase(getEmployees.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    });
  },
});

const reducer = employeesSlice.reducer;

export { reducer };
