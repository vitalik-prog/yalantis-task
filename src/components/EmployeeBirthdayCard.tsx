import React from 'react';
import { Employee } from '../common/types';
import './styles.css';

type Props = {
  employee: Employee;
};

const EmployeeBirthdayCard: React.FC<Props> = ({ employee }) => {
  const month = new Date(employee.dob).toLocaleString('en-EN', { month: 'long' });
  const year = new Date(employee.dob).toLocaleString('en-EN', { year: 'numeric' });
  let date = new Date(employee.dob).toLocaleString('en-EN', { day: 'numeric' });
  if (Number(date) < 10) {
    date = '0' + date;
  }
  return (
    <div className={'employeeBirthdayCard'}>
      <div>
        {employee.lastName} {employee.firstName} - {date} {month}, {year} year
      </div>
    </div>
  );
};

export default EmployeeBirthdayCard;
