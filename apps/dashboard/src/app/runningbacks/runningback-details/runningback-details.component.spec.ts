import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningbackDetailsComponent } from './runningback-details.component';

describe('RunningbackDetailsComponent', () => {
  let component: RunningbackDetailsComponent;
  let fixture: ComponentFixture<RunningbackDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunningbackDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningbackDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
