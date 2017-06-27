import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfDailyComponent } from './wf-daily.component';

describe('WfDailyComponent', () => {
  let component: WfDailyComponent;
  let fixture: ComponentFixture<WfDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
