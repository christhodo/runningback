import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Runningback } from '@runningback-angular/api-interfaces';

@Component({
  selector: 'runningback-angular-runningback-details',
  templateUrl: './runningback-details.component.html',
  styleUrls: ['./runningback-details.component.scss'],
})
export class RunningbackDetailsComponent {
  currentRunningback: Runningback;
  originalTitle = '';
  @Input() set runningback(value: Runningback) {
    if (value) this.originalTitle = value.title;
    this.currentRunningback = { ...value };
  }
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
