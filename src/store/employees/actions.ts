import { createAsyncThunk } from '@reduxjs/toolkit';
import { employeesApi } from '../../services';
import { Employee, AsyncThunkConfig } from '../../types';
import { ActionType } from './common';

const getEmployees = createAsyncThunk<Employee[], undefined, AsyncThunkConfig>(
  ActionType.EMPLOYEES_GET,
  async (_args, { extra }) => {
    console.log(_args);
    console.log(extra);
    return await employeesApi.getEmployees();
  }
);

export { getEmployees };
