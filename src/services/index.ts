import { Http } from './http';
import { Storage } from './storage';
import { EmployeesApi } from './employeesApi';

const storage = new Storage({ storage: localStorage });

const http = new Http();

const employeesApi = new EmployeesApi({ http });

export { storage, employeesApi };
