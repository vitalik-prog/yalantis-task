import { Employee } from '../common/types';

const getActiveEmployees = (employees: Employee[]): Employee[] => {
  return employees
    .filter((employee) => employee.isActive)
    .sort((a, b) => {
      const nameA = a.lastName.toLowerCase();
      const nameB = b.lastName.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
};

export { getActiveEmployees };
