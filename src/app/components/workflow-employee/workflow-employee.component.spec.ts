import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowEmployeeComponent } from './workflow-employee.component';

describe('WorkflowEmployeeComponent', () => {
  let component: WorkflowEmployeeComponent;
  let fixture: ComponentFixture<WorkflowEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
