import React from 'react';
import { EmployeeBirthdayCard } from '.';
import { month } from '../common/constants/array';
import { Employee } from '../common/types';
import './styles.css';

type Props = {
  employees: Employee[];
};

const EmployeesBirthdayList: React.FC<Props> = ({ employees }) => {
  const activeEmployees = employees
    .filter((employee) => employee.isActive)
    // .sort((a, b) => new Date(a.dob).getTime() - new Date(b.dob).getTime());
    .sort((a, b) => {
      const nameA = a.lastName.toLowerCase();
      const nameB = b.lastName.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  let monthesFromNowToEndOfYear: string[] = [];
  let monthesFromStartOfYearTillNow: string[] = [];
  monthesFromNowToEndOfYear = month.slice(new Date().getMonth());
  monthesFromStartOfYearTillNow = month.slice(0, new Date().getMonth());
  const monthes = monthesFromNowToEndOfYear.concat(monthesFromStartOfYearTillNow);
  const isActiveEmployeesExist = Boolean(activeEmployees.length);
  return (
    <div className={'employeesBirthday'}>
      <h2>Employees birthday</h2>
      <div>
        <div className={'separator'}></div>
        {isActiveEmployeesExist ? (
          monthes.map((month) => {
            let isNameExist = false;
            return (
              <div className={'monthCard'} key={month}>
                <div>{month}</div>
                {activeEmployees.map((employee) => {
                  if (new Date(employee.dob).toLocaleString('en-EN', { month: 'long' }) === month) {
                    isNameExist = true;
                    return <EmployeeBirthdayCard key={employee.id} employee={employee} />;
                  }
                })}
                {!Boolean(isNameExist) && (
                  <span className={'employeeBirthdayCard'}>
                    <b>No Employees</b>
                  </span>
                )}
              </div>
            );
          })
        ) : (
          <div>Employees List is empty</div>
        )}
      </div>
    </div>
  );
};

export default EmployeesBirthdayList;
