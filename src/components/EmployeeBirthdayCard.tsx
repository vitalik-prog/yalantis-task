import React from 'react';
import { Employee } from '../common/types';
import { getFormattedDate } from '../helpers';
import './styles.css';

type Props = {
  employee: Employee;
};

const EmployeeBirthdayCard: React.FC<Props> = ({ employee }) => {
  return (
    <div className={'employeeBirthdayCard'}>
      <div>
        {employee.lastName} {employee.firstName} - {getFormattedDate(employee)} year
      </div>
    </div>
  );
};

export default EmployeeBirthdayCard;
