import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from '@runningback-angular/core-data';
import { CoreStateModule } from '@runningback-angular/core-state';
import { MaterialModule } from '@runningback-angular/material';
import { UiLoginModule } from '@runningback-angular/ui-login';
import { RoutingModule } from './routing.module';
import { RunningbacksComponent } from './runningbacks/runningbacks.component';
import { RunningbacksListComponent } from './runningbacks/runningbacks-list/runningbacks-list.component';
import { RunningbackDetailsComponent } from './runningbacks/runningback-details/runningback-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RunningbacksComponent,
    RunningbacksListComponent,
    RunningbackDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    UiLoginModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
