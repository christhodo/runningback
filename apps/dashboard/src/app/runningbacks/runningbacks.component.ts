import { Component, OnInit } from '@angular/core';
import { Runningback } from '@runningback-angular/api-interfaces';
import { RunningbacksFacade } from '@runningback-angular/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'runningback-angular-runningbacks',
  templateUrl: './runningbacks.component.html',
  styleUrls: ['./runningbacks.component.scss'],
})
export class RunningbacksComponent implements OnInit {
  allRunningbacks$: Observable<Runningback[]> = this.runningbacksFacade
    .allRunningbacks$;
  selectedRunningback$: Observable<Runningback> = this.runningbacksFacade
    .selectedRunningback$;

  constructor(private runningbacksFacade: RunningbacksFacade) {}

  ngOnInit(): void {
    this.reset();
    this.runningbacksFacade.mutations$.subscribe((_) => this.reset());
  }

  reset() {
    this.loadRunningbacks();
    this.selectRunningback(null);
  }

  resetForm() {
    this.selectRunningback(null);
  }

  selectRunningback(runningback: Runningback) {
    this.runningbacksFacade.selectRunningback(runningback?.id);
  }

  loadRunningbacks() {
    this.runningbacksFacade.loadRunningbacks();
  }

  saveRunningback(runningback: Runningback) {
    this.runningbacksFacade.saveRunningback(runningback);
  }

  deleteRunningback(runningback: Runningback) {
    this.runningbacksFacade.deleteRunningback(runningback);
  }
}
