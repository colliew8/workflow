import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ElmsApiService } from './services/elms-api.service';

import { AppComponent } from './app.component';

import 'hammerjs';

import { WorkflowEmployeeComponent } from './components/workflow-employee/workflow-employee.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WfHeaderComponent } from './components/wf-header/wf-header.component';
import { WorkflowComponent } from './components/workflow/workflow.component';
import {
  MdToolbarModule,
  MdIconModule,
  MdInputModule,
  MdCardModule,
  MdProgressSpinnerModule,
  MdChipsModule,
  MdProgressBarModule
} from '@angular/material';

import { RateTypePipe } from './rate-type.pipe';
import { ColumnFilterPipe } from './column-filter.pipe';
import { DecimalToTimePipe } from './decimal-to-time.pipe';
import { WfDailyComponent } from './components/wf-daily/wf-daily.component';
import { OrderByPipe } from './pipes/order-by.pipe';

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
    WorkflowComponent,
    RateTypePipe,
    ColumnFilterPipe,
    DecimalToTimePipe,
    WfDailyComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdCardModule,
    MdProgressSpinnerModule,
    MdChipsModule,
    MdProgressBarModule
  ],
  providers: [
    ElmsApiService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
