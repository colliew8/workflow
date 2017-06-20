import { Component, OnInit, Input } from '@angular/core';

import * as _ from 'lodash';

import { Employee } from '../models/employee';
import { TimesheetService } from '../timesheet.service';
import { RateTypeService } from '../rate-type.service';

@Component({
  selector: 'app-workflow-employee',
  templateUrl: './workflow-employee.component.html',
  styleUrls: ['./workflow-employee.component.css']
})
export class WorkflowEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Input() calendar: number;

  errorMessage: string;
  skip: number;
  limit: number;
  total: number;

  canEdit: boolean;

  timesheets: any;
  rateTypes: any;

  constructor(private tsS: TimesheetService, private rtS: RateTypeService) {
  }

  ngOnInit() {
    this.skip = 0;
    this.limit = 20;
    this.total = 0;

    this.getTimesheets();

    this.canEdit = false;
  }

  getTimesheets() {
    if (!this.employee) {
      return;
    }

    this.tsS.getTimesheets(this.employee.contractorderEmployeeID, this.calendar, this.skip, this.limit)
      .subscribe(
        result => {
          this.total = result.total;
          this.calculateTimesheetTotals(result.result);
        },
        error =>  this.errorMessage = <any>error);
  }

  calculateTimesheetTotals(r: any) {
    for (let i = 0; i < r.length; i++ ) {
      r[i].totals = [];
      for (let k = 0; k < r[i].timesheetSegements.length; k++) {
        const index = _.findIndex(r[i].totals, function(o: any) { return o.rateTypeId === r[i].timesheetSegements[k].PayrollRateTypeID; });

        if (index === -1) {
          r[i].totals.push({
            rateTypeId: r[i].timesheetSegements[k].PayrollRateTypeID,
            timeDecimal: r[i].timesheetSegements[k].SegmentTimeDecimal
          });
        } else {
          r[i].totals[index] += r[i].timesheetSegements[k].SegmentTimeDecimal;
        }
      }
    }

    this.timesheets = r;
  }

}
