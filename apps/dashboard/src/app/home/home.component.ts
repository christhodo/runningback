import { Component, OnInit } from '@angular/core';
import { Runningback } from '@runningback-angular/api-interfaces';
import { RunningbacksService } from '@runningback-angular/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'runningback-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  runningbacks$: Observable<Runningback[]>;

  constructor(private runningbacksService: RunningbacksService) {}

  ngOnInit(): void {
    this.loadRunningbacks();
  }

  loadRunningbacks() {
    this.runningbacks$ = this.runningbacksService.all();
  }
}
