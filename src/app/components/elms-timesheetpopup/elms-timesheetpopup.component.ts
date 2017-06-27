import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { WorkflowComponent } from '../Workflow/workflow.component';
import { WfDailyComponent } from '../wf-daily/wf-daily.component';


@Component({
  selector: 'app-elms-timesheetpopup',
  templateUrl: './elms-timesheetpopup.component.html',
  styleUrls: ['./elms-timesheetpopup.component.css']
})
export class ElmsTimesheetpopupComponent implements OnInit {
  contractOrderEmployeeID: number;
  period: string;
  popupUrl: string;

  constructor(public dialogRef: MdDialogRef<WfDailyComponent>) { }

  ngOnInit() {
    this.popupUrl = `http://172.18.2.97/Timesheets/TimesheetPopUp.aspx?ContractOrderEmployeeID=${this.contractOrderEmployeeID}&ToTime=${this.period}`;
  }

}
