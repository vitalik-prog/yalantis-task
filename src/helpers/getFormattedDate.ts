import { Employee } from '../common/types';

const getFormattedDate = (employee: Employee): string => {
  const month = new Date(employee.dob).toLocaleString('en-EN', { month: 'long' });
  const year = new Date(employee.dob).toLocaleString('en-EN', { year: 'numeric' });
  let date = new Date(employee.dob).toLocaleString('en-EN', { day: 'numeric' });
  if (Number(date) < 10) {
    date = '0' + date;
  }
  return `${date} ${month}, ${year}`;
};

export { getFormattedDate };
