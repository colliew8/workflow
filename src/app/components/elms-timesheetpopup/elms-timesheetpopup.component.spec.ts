import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElmsTimesheetpopupComponent } from './elms-timesheetpopup.component';

describe('ElmsTimesheetpopupComponent', () => {
  let component: ElmsTimesheetpopupComponent;
  let fixture: ComponentFixture<ElmsTimesheetpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElmsTimesheetpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElmsTimesheetpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
