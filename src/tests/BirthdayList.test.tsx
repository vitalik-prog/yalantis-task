import { render, screen } from '@testing-library/react';
import { EmployeesBirthdayList } from '../components';

test('renders month name', () => {
  const employees = [
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
  ]
  render(<EmployeesBirthdayList employees={employees} />);
  const linkElement = screen.getByText(/September/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Employees List is empty if there is not active employee', () => {
  const employees = [
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
  ]
  render(<EmployeesBirthdayList employees={employees} />);
  const linkElement = screen.getByText(/Employees List is empty/i);
  expect(linkElement).toBeInTheDocument();
});
