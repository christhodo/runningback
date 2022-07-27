import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Runningback } from '@runningback-angular/api-interfaces';

@Component({
  selector: 'runningback-angular-runningbacks-list',
  templateUrl: './runningbacks-list.component.html',
  styleUrls: ['./runningbacks-list.component.scss'],
})
export class RunningbacksListComponent {
  @Input() runningbacks: Runningback[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
