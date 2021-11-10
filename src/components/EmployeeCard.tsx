import React from 'react';
import { Employee } from '../common/types';
import './styles.css';

type Props = {
  employee: Employee;
};

const EmployeeCard: React.FC<Props> = ({ employee }) => {
  return (
    <div className={'employeeCard'}>
      <div>
        {employee.firstName} {employee.lastName}
      </div>
    </div>
  );
};

export default EmployeeCard;
