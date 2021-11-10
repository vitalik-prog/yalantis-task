import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getEmployees } from '../store/actions';
import { Loader, EmployeesList } from '../components';
import { useAppSelector } from '../hooks';
import { DataStatus } from '../enums';

const EmployeesPage: React.FC = () => {
  const { employees, dataStatus } = useAppSelector(({ employees }) => ({
    employees: employees.employees,
    dataStatus: employees.dataStatus,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  if (dataStatus === DataStatus.PENDING) {
    return <Loader />;
  }

  return (
    <>
      <EmployeesList employees={employees} />
    </>
  );
};

export default EmployeesPage;
