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
            let namesInLetterCounter = 0;
            return (
              <div className={'letterColumn'} key={letter}>
                <h3>{letter}</h3>
                {employees.map((employee) => {
                  if (letter === employee.firstName[0].toUpperCase()) {
                    namesInLetterCounter++;
                    return <EmployeeCard employee={employee} key={employee.id} />;
                  }
                })}
                {!Boolean(namesInLetterCounter) && (
                  <span className={'employeeCard'}>
                    <b>No Employees</b>
                  </span>
                )}
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
