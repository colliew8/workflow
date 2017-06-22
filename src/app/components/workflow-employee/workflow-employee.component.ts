import { Component, OnInit, Input } from '@angular/core';

import * as _ from 'lodash';
import * as moment from 'moment';

import { Employee } from '../../models/employee';
import { ElmsApiService } from '../../services/elms-api.service';

@Component({
  selector: 'app-workflow-employee',
  templateUrl: './workflow-employee.component.html',
  styleUrls: ['./workflow-employee.component.css']
})
export class WorkflowEmployeeComponent implements OnInit {
  // loader
  componentLoading: boolean;
  /*color = 'primary';
  mode = 'indeterminate';
  value = 0;*/

  color = 'primary';
  mode = 'query';

  tableClass = {
    'mdl-data-table': true,
    'mdl-js-data-table': true,
    'mdl-data-table--selectable': true,
    'mdl-shadow--2dp': true,
  }

  tableHeader = {
    'mdl-data-table__cell--non-numeric': true
  }

  cssTableHeader = {
    'table-header-seperator': true
  }

  fake: {
    date: string,
    time: string,
    number: string,
    textShort: string,
    textMedium: string,
    textLong: string,
  };

  @Input() employee: Employee;
  @Input() calendar: number;
  @Input() rateTypes: any;
  @Input() wfDays: any[];

  errorMessage: string;
  skip: number;
  limit: number;
  total: number;

  canEdit: boolean;

  timesheets: any;
  timesheetsLoading: boolean;

  columnHeaders: any;

  constructor(private elmsApi: ElmsApiService) {
  }

  ngOnInit() {
    this.fake = {
      date: '--- --/--/----',
      time: '--:--',
      number: '--',
      textShort: '___',
      textMedium: '______',
      textLong: '_____________'
    };

    this.columnHeaders = [
      { 'Description': 'Normal Time', 'RateTypeID': 2 },
      { 'Description': 'Overtime 1.00', 'RateTypeID': 7 },
      { 'Description': 'Overtime 2.00', 'RateTypeID': 10 },
      { 'Description': 'Breaks', 'RateTypeID': 15 },
      { 'Description': 'Shift Allowance', 'RateTypeID': 23 },
    ];

    this.componentLoading = false;

    this.skip = 0;
    this.limit = 20;
    this.total = 0;

    this.timesheetsLoading = true;
    this.getTimesheets();

    this.canEdit = false;
  }

  getTimesheets() {
    if (!this.employee) {
      return;
    }

    this.elmsApi.getTimesheets(this.skip, this.limit, this.employee.contractorderEmployeeID, this.calendar)
      .subscribe(
        result => {
          this.total = result.total;
          this.calculateTimesheetTotals(result.result);
          this.timesheetsLoading = false;
        },
        error => {
          this.errorMessage = <any>error;
          this.timesheetsLoading = false;
        })
  }

  calculateTimesheetTotals(r: any) {
    this.timesheets = r;
  }

}
