import { createAsyncThunk } from '@reduxjs/toolkit';
import { employeesApi } from '../../services';
import { Employee, AsyncThunkConfig } from '../../common/types';
import { ActionType } from './common';
import { NotificationTitle, NotificationMessage } from '../../enums';

const getEmployees = createAsyncThunk<Employee[], undefined, AsyncThunkConfig>(
  ActionType.EMPLOYEES_GET,
  async (_args, { extra }) => {
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
    const { storage, notification } = extra;
    const { employees } = getState();
    const isEmployeeActive = storage.getItem(employeeId);
    if (isEmployeeActive) {
      storage.removeItem(employeeId);
      notification.warning(
        NotificationTitle.SUCCESS,
        NotificationMessage.EMPLOYEE_SELECTION_DELETED
      );
    } else {
      storage.setItem(employeeId, 'value');
      notification.success(NotificationTitle.SUCCESS, NotificationMessage.EMPLOYEE_SELECTED);
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
