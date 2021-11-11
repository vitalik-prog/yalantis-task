import { createAsyncThunk } from '@reduxjs/toolkit';
import { employeesApi } from '../../services';
import { Employee, AsyncThunkConfig } from '../../common/types';
import { ActionType } from './common';

const getEmployees = createAsyncThunk<Employee[], undefined, AsyncThunkConfig>(
  ActionType.EMPLOYEES_GET,
  async (_args, { extra }) => {
    console.log(_args);
    const { storage } = extra;
    const employees = await employeesApi.getEmployees();
    return employees.map((employee) => {
      return {
        ...employee,
        isActive: Boolean(storage.getItem(employee.id)),
      };
    });
  }
);

const selectEmployee = createAsyncThunk<Employee[], string, AsyncThunkConfig>(
  ActionType.EMPLOYEE_SELECT,
  async (employeeId, { extra, getState }) => {
    const { storage } = extra;
    const { employees } = getState();
    const isEmployeeActive = storage.getItem(employeeId);
    if (isEmployeeActive) {
      storage.removeItem(employeeId);
    } else {
      storage.setItem(employeeId, 'value');
    }
    return employees.employees.map((employee) => {
      if (employee.id !== employeeId) return employee;
      return {
        ...employee,
        isActive: Boolean(!isEmployeeActive),
      };
    });
  }
);

export { getEmployees, selectEmployee };
