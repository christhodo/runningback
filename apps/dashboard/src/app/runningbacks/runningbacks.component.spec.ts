import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningbacksComponent } from './runningbacks.component';

describe('RunningbacksComponent', () => {
  let component: RunningbacksComponent;
  let fixture: ComponentFixture<RunningbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunningbacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
