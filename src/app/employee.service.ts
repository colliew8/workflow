import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Employee } from './models/employee';
import { Configuration } from './app.config';

@Injectable()
export class EmployeeService {

  constructor (private http: Http) {
  }

  getEmployees(instanceId, skip = 0, limit = 20): Observable<any> {
    const config = new Configuration();

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.token}`
    });

    const options = new RequestOptions({ headers: headers });

    return this.http.get(`${config.serverWithApiUrl}workflow/instances/${instanceId}/employees?skip=${skip}&limit=${limit}`, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body: any;
    body = res.json();

    let employees: Array<Employee>;
    employees = new Array<Employee>();

    for (let i = 0; i < body.result.length; i++) {

      employees.push(<Employee>({
        eid: body.result[i].id,
        employeeCode: body.result[i].employeeNo,
        employeeCodeClient: '',
        fname: body.result[i].firstName,
        lname: body.result[i].lastname,
        contractorderEmployeeID: body.result[i].contractOrderEmployee
      }));
    }

    return { employees: employees, total: body.total } || { employees: null, total: 0 };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
