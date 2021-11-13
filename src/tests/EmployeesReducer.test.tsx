import { Employee } from "../common/types";
import { DataStatus } from "../enums";
import { selectEmployee } from "../store/actions";
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
        isActive: true
  
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
        isActive: true
      }
    ],
  }
})

test ('first employee became not active', () => {
  const changedState = initialState.employees.map((employee) => {
    if (employee.id === "5e00928d91e7feaa9872ec08") {
      return {
        ...employee,
        isActive: false
      };
    } else {
      return employee;
    }
  })
  const newState = employeesReducer(initialState, {type: selectEmployee.fulfilled, payload: changedState})
  expect(newState.employees[0].isActive).toBeFalsy();
})

test ('second employee became active', () => {
  const changedState = initialState.employees.map((employee) => {
    if (employee.id === "5e00928df892b0c84c82db9d") {
      return {
        ...employee,
        isActive: true
      };
    } else {
      return employee;
    }
  })
  const newState = employeesReducer(initialState, {type: selectEmployee.fulfilled, payload: changedState})
  expect(newState.employees[1].isActive).toBeTruthy();
})
