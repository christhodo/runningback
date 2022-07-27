import { Injectable } from '@angular/core';
import { Runningback } from '@runningback-angular/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/dashboard/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RunningbacksService {
  model = 'runningbacks';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Runningback[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Runningback>(this.getUrlWithId(id));
  }

  create(runningback: Runningback) {
    return this.http.post(this.getUrl(), runningback);
  }

  update(runningback: Runningback) {
    return this.http.put(this.getUrlWithId(runningback.id), runningback);
  }

  delete(runningback: Runningback) {
    return this.http.delete(this.getUrlWithId(runningback.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
