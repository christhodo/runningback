import { Injectable } from '@angular/core';
import { Runningback } from '@runningback-angular/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as RunningbacksActions from './runningbacks.actions';
import * as RunningbacksSelectors from './runningbacks.selectors';

@Injectable()
export class RunningbacksFacade {
  loaded$ = this.store.pipe(
    select(RunningbacksSelectors.getRunningbacksLoaded)
  );
  allRunningbacks$ = this.store.pipe(
    select(RunningbacksSelectors.getAllRunningbacks)
  );
  selectedRunningback$ = this.store.pipe(
    select(RunningbacksSelectors.getSelectedRunningback)
  );

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === RunningbacksActions.createRunningback({} as any).type ||
        action.type === RunningbacksActions.updateRunningback({} as any).type ||
        action.type === RunningbacksActions.deleteRunningback({} as any).type
    )
  );

  constructor(private store: Store, private actions$: ActionsSubject) {}

  selectRunningback(selectedId: string) {
    this.dispatch(RunningbacksActions.selectRunningback({ selectedId }));
  }

  loadRunningbacks() {
    this.dispatch(RunningbacksActions.loadRunningbacks());
  }

  loadRunningback(runningbackId: string) {
    this.dispatch(RunningbacksActions.loadRunningback({ runningbackId }));
  }

  saveRunningback(runningback: Runningback) {
    if (runningback.id) {
      this.updateRunningback(runningback);
    } else {
      this.createRunningback(runningback);
    }
  }

  createRunningback(runningback: Runningback) {
    this.dispatch(RunningbacksActions.createRunningback({ runningback }));
  }

  updateRunningback(runningback: Runningback) {
    this.dispatch(RunningbacksActions.updateRunningback({ runningback }));
  }

  deleteRunningback(runningback: Runningback) {
    this.dispatch(RunningbacksActions.deleteRunningback({ runningback }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
