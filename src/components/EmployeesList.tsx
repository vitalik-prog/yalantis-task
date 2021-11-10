import React from 'react';
import { EmployeeCard } from '.';
import { alphabet } from '../common/constants/array';
import { Employee } from '../common/types';
import './styles.css';

type Props = {
  employees: Employee[];
};

const EmployeesList: React.FC<Props> = ({ employees }) => {
  return (
    <div className={'employeesList'}>
      <div className={'employees'}>
        <h1>Employees</h1>
        <div className={'listWrapper'}>
          {alphabet.map((letter) => {
            return (
              <div className={'letterColumn'} key={letter}>
                <h5>{letter}</h5>
                {employees.map((employee) => {
                  return <EmployeeCard employee={employee} key={employee.id} />;
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className={'employeesBirthday'}>
        <h1>Employees birthday</h1>
      </div>
    </div>
  );
};

export default EmployeesList;
