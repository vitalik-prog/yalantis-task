import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { EmployeeCard } from '.';
import { alphabet } from '../common/constants/array';
import { Employee } from '../common/types';
import { useHorizontalScroll } from '../hooks/useScroll';
import { selectEmployee } from '../store/actions';
import './styles.css';

type Props = {
  employees: Employee[];
};

const EmployeesList: React.FC<Props> = ({ employees }) => {
  const [isShowHeader, setIsShowHeader] = useState(false);
  const dispatch = useDispatch();
  const scrollRef = useHorizontalScroll();
  const handleEmployeeSelect = (employeeId: string): void => {
    dispatch(selectEmployee(employeeId));
  };

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    const { scrollTop } = event.currentTarget;
    if (scrollTop > 80) {
      setIsShowHeader(true);
    } else {
      setIsShowHeader(false);
      return;
    }
  };
  return (
    <>
      <div className={'employees'} onScroll={handleScroll} ref={scrollRef}>
        <h2 className={isShowHeader ? 'employeesHeader opacityNull' : 'employeesHeader'}>
          Employees
        </h2>
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
    </>
  );
};

export default EmployeesList;
