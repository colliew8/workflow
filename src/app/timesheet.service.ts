import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Configuration } from './app.config';

@Injectable()
export class TimesheetService {

  constructor (private http: Http) {
  }

  getTimesheets(contractorderEmployee, calendar, skip = 0, limit = 20): Observable<any> {
    const config = new Configuration();

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.token}`
    });

    const options = new RequestOptions({ headers: headers });

    return this.http.get(`${config.serverWithApiUrl}time/timesheets?skip=${skip}&limit=${limit}&coeid=${contractorderEmployee}&calendarid=${calendar}`, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body: any;
    body = res.json();

    return body || { result: null, total: 0 };
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
