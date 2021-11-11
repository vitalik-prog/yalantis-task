import React from 'react';
import { Employee } from '../common/types';
import './styles.css';

type Props = {
  employee: Employee;
  onEmployeeSelect: (employeeId: string) => void;
};

const EmployeeCard: React.FC<Props> = ({ employee, onEmployeeSelect }) => {
  return (
    <div className={'employeeCard'}>
      <div className={employee.isActive ? 'blue employeeName' : 'employeeName'}>
        {employee.firstName} {employee.lastName}
      </div>
      <form className={'radioWrapper'}>
        <label>
          <input
            type="radio"
            checked={!employee.isActive}
            onChange={() => onEmployeeSelect(employee.id)}
          />
          not active
        </label>
        <label>
          <input
            type="radio"
            checked={employee.isActive}
            onChange={() => onEmployeeSelect(employee.id)}
          />
          active
        </label>
      </form>
    </div>
  );
};

export default EmployeeCard;
