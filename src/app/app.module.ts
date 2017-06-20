import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataService } from './data.service';
import { EmployeeService } from './employee.service';
import { RateTypeService } from './rate-type.service';
import { TimesheetService } from './timesheet.service';
import { WFInstanceService } from './wf-instance.service';

import { AppComponent } from './app.component';

import 'hammerjs';

import { WorkflowEmployeeComponent } from './workflow-employee/workflow-employee.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WfHeaderComponent } from './wf-header/wf-header.component';
import { WorkflowComponent } from './workflow/workflow.component';
import {
  MdToolbarModule,
  MdIconModule
} from '@angular/material';

const appRoutes = [
  { path: 'workflows', component: WorkflowComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WorkflowEmployeeComponent,
    HeaderComponent,
    FooterComponent,
    WfHeaderComponent,
    WorkflowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [
    DataService,
    EmployeeService,
    RateTypeService,
    TimesheetService,
    WFInstanceService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
