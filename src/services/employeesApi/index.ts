import { Path, HttpMethod } from '../../enums';
import { Employee } from '../../types';
import { Http } from '../http';

type Constructor = {
  http: Http;
};

class EmployeesApi {
  #http: Http;

  constructor({ http }: Constructor) {
    this.#http = http;
  }

  public getEmployees(): Promise<Employee[]> {
    return this.#http.load(`${Path.API_EMPLOYEES_ORIGIN_URL}`, { method: HttpMethod.GET });
  }
}

export { EmployeesApi };
