import { Component, OnInit, Input } from '@angular/core';
import {
  AuthGuardService,
  NotifyService,
} from '@runningback-angular/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'runningback-angular-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() title;
  @Input() sidenav;
  @Input() isAuthenticated;

  constructor(
    private auth: AuthGuardService,
    private notify: NotifyService,
    private route: Router
  ) {}

  ngOnInit() {}

  logout() {
    this.auth.logout();
    this.notify.notify('Successfully Logged Out');
    this.route.navigate(['/login']);
  }

  login() {
    this.route.navigate(['/login']);
  }
}
