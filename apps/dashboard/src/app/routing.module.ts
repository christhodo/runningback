import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RunningbacksComponent } from './runningbacks/runningbacks.component';
import { WildComponent } from 'libs/ui-login/src/lib/wild/wild/wild.component';
import { LoginComponent } from 'libs/ui-login/src/lib/login/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@runningback-angular/core-data';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'runningbacks',
    canActivate: [AuthGuard],
    children: [{ path: '', component: RunningbacksComponent }],
  },
  { path: 'wild', component: WildComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
