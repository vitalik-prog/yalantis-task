import React from 'react';
import { EmployeeBirthdayCard } from '.';
import { Employee } from '../common/types';
import { getActiveEmployees, getMonthes } from '../helpers';
import './styles.css';

type Props = {
  employees: Employee[];
};

const EmployeesBirthdayList: React.FC<Props> = ({ employees }) => {
  const activeEmployees = getActiveEmployees(employees);
  const monthes = getMonthes();
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
                  <div className={'employeeBirthdayCard'}>No Employees</div>
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
