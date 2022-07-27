import { Component } from '@angular/core';
import { AuthGuardService } from '@runningback-angular/core-data';

@Component({
  selector: 'runningback-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '';

  links = [{ path: '/runningbacks', icon: 'view_list', title: 'RunningBacks' }];

  userIsAuthenticated = this.authService.isAuthenticated;
  constructor(private authService: AuthGuardService) {}
}
