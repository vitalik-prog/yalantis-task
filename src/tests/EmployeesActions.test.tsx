import { Employee } from "../common/types";
import { DataStatus } from "../enums";
import { storage } from "../services";
import { store } from "../store";
import { getEmployees, selectEmployee } from "../store/actions";
import { employeesApi } from '../services';
import { reducer as employeesReducer } from '../store/employees';

type State = {
  dataStatus: DataStatus;
  employees: Employee[] | [];
};

let initialState: State = {
  dataStatus: DataStatus.FULFILLED,
  employees: [],
};

beforeEach(() => {
  initialState = {
    dataStatus: DataStatus.FULFILLED,
    employees: [
      {
        id: "5e00928d91e7feaa9872ec08",
        firstName: "Yang",
        lastName: "Carson",
        dob: "2019-02-26T16:52:36.244Z",
        isActive: false
      },
      {
        id: "5e00928df892b0c84c82db9d",
        firstName: "Dorsey",
        lastName: "Meadows",
        dob: "2019-09-19T09:34:32.083Z",
        isActive: false
      },
      {
        id: "5e00928dea77bb8b9a15bdc2",
        firstName: "Roxanne",
        lastName: "Salas",
        dob: "2019-07-13T07:19:20.718Z",
        isActive: false
      }
    ],
  }
})

test ('localstorage has a key 5e00928df892b0c84c82db9d', () => {
  const employeeId = '5e00928df892b0c84c82db9d';
  store.dispatch(selectEmployee(employeeId))
  expect(storage.getItem(employeeId)).toBe('value');
})

test ('localstorage do not has a key 5e00928df892b0c84c82db9d', () => {
  const employeeId = '5e00928df892b0c84c82db9d';
  store.dispatch(selectEmployee(employeeId))
  expect(storage.getItem(employeeId)).toBeFalsy();
})

test ('expected employeesApi will bee called one time', () => {
  const employeesApiMock = jest.spyOn(employeesApi, 'getEmployees');
  store.dispatch(getEmployees());
  expect(employeesApiMock).toHaveBeenCalledTimes(1);
})
