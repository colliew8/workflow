import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ElmsApiService } from '../../services/elms-api.service';
import { Employee } from '../../models/employee';

import * as moment from 'moment';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})

export class WorkflowComponent implements OnInit {
  errorMessage: string;

  wfInstanceId: number;
  wfInstance: any;
  wfEmployees: Employee[];
  wfDays: any[];

  rateTypes: any;
  rateTypesLoading: boolean;

  skip: number;
  limit: number;
  total: number;

  constructor(private elmsApi: ElmsApiService,
    private route: ActivatedRoute,
    private router: Router) {
    this.total = 0;
  }

  ngOnInit() {
    this.skip = 0;
    this.limit = 10;

    const sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.wfInstanceId = params['instance'];
        this.getWFInstance();
        this.getEmployees();
      });

    this.rateTypesLoading = true;
    this.getRatetypes();
  }

  getEmployees() {
    if (this.wfInstanceId === undefined || this.wfInstanceId === null) {
      return;
    }

    this.elmsApi.getEmployees(this.skip, this.limit, this.wfInstanceId)
      .subscribe(
        result => {
          this.wfEmployees = result.employees;
          this.total = result.total;
        },
        error =>  this.errorMessage = <any>error);
  }

  getWFInstance() {
    if (this.wfInstanceId === undefined || this.wfInstanceId === null) {
      return;
    }

    this.elmsApi.getWFInstance(this.skip, this.limit, this.wfInstanceId)
      .subscribe(
        result => {
          this.wfInstance = result.result[0];
          this.fillExpectedDays(this.wfInstance.calendarFrom, this.wfInstance.calanderTo);
        },
        error =>  this.errorMessage = <any>error);
  }

  getRatetypes() {
    this.elmsApi.getRateTypes(0, 1000)
      .subscribe(
        result => {
          this.rateTypes = result;
          this.rateTypesLoading = false;
        },
        error =>  {
          this.errorMessage = <any>error;
          this.rateTypesLoading = false;
        })
  }

  fillExpectedDays(from: Date, to: Date) {
    const days = [];

    for (const i = moment(from); i < moment(to); i.add(1, 'days')) {
      days.push(i);
    };

    this.wfDays = days;
  }

  page() {
    return this.skip / this.limit + 1;
  }

  pages() {
    return Math.ceil(this.total / this.limit);
  }

  next() {
    if (this.skip + this.limit < this.total) {
      this.skip += this.limit;
      this.getEmployees();
    }
  }

  previous() {
    if (this.skip > 0) {
      this.skip -= this.limit;
      this.getEmployees();
    }
  }
}
