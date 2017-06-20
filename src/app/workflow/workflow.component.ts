import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee';

import { WFInstanceService } from '../wf-instance.service';

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

  skip: number;
  limit: number;
  total: number;

  constructor(private eS: EmployeeService,
    private wfiS: WFInstanceService,
    private route: ActivatedRoute,
    private router: Router) {
    this.total = 0;
  }

  ngOnInit() {
    this.skip = 0;
    this.limit = 20;

    const sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.wfInstanceId = params['instance'];
        this.getWFInstance();
        this.getEmployees();
      });
  }

  getEmployees() {
    if (this.wfInstanceId === undefined || this.wfInstanceId === null) {
      return;
    }

    this.eS.getEmployees(this.wfInstanceId, this.skip, this.limit)
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

    this.wfiS.getWFInstance(this.wfInstanceId, this.skip, this.limit)
      .subscribe(
        result => {
          this.wfInstance = result;
          console.log(this.wfInstance);
        },
        error =>  this.errorMessage = <any>error);
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
