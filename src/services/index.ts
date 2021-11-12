import { Http } from './http';
import { Storage } from './storage';
import { EmployeesApi } from './employeesApi';
import { Notification } from './notification';

const storage = new Storage({ storage: localStorage });

const http = new Http();

const employeesApi = new EmployeesApi({ http });

const notification = new Notification();

export { storage, employeesApi, notification };
