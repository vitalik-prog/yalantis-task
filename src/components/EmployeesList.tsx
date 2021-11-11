import React from 'react';
import { useDispatch } from 'react-redux';
import { EmployeeCard } from '.';
import { alphabet } from '../common/constants/array';
import { Employee } from '../common/types';
import { selectEmployee } from '../store/actions';
import './styles.css';

type Props = {
  employees: Employee[];
};

const EmployeesList: React.FC<Props> = ({ employees }) => {
  const dispatch = useDispatch();
  const handleEmployeeSelect = (employeeId: string): void => {
    dispatch(selectEmployee(employeeId));
  };
  return (
    <div className={'employeesList'}>
      <div className={'employees'}>
        <h1>Employees</h1>
        <div className={'listWrapper'}>
          {alphabet.map((letter) => {
            let isNameExist = false;
            return (
              <div className={'letterColumn'} key={letter}>
                <h3>{letter}</h3>
                {employees.map((employee) => {
                  if (letter === employee.firstName[0].toUpperCase()) {
                    isNameExist = true;
                    return (
                      <EmployeeCard
                        employee={employee}
                        key={employee.id}
                        onEmployeeSelect={handleEmployeeSelect}
                      />
                    );
                  }
                })}
                {!Boolean(isNameExist) && (
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
