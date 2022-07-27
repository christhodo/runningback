import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningbacksListComponent } from './runningbacks-list.component';

describe('RunningbacksListComponent', () => {
  let component: RunningbacksListComponent;
  let fixture: ComponentFixture<RunningbacksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunningbacksListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningbacksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
