import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import * as fromRunningbacks from './runningbacks.reducer';
import * as RunningbacksActions from './runningbacks.actions';
import { Runningback } from '@runningback-angular/api-interfaces';
import { RunningbacksService } from '@runningback-angular/core-data';

@Injectable()
export class RunningbacksEffects {
  loadRunningbacks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RunningbacksActions.loadRunningbacks),
      fetch({
        run: (action) =>
          this.runningbacksService
            .all()
            .pipe(
              map((runningbacks: Runningback[]) =>
                RunningbacksActions.loadRunningbacksSuccess({ runningbacks })
              )
            ),
        onError: (action, error) =>
          RunningbacksActions.loadRunningbacksFailure({ error }),
      })
    )
  );

  loadRunningback$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RunningbacksActions.loadRunningback),
      fetch({
        run: (action) =>
          this.runningbacksService
            .find(action.runningbackId)
            .pipe(
              map((runningback: Runningback) =>
                RunningbacksActions.loadRunningbackSuccess({ runningback })
              )
            ),
        onError: (action, error) =>
          RunningbacksActions.loadRunningbackFailure({ error }),
      })
    )
  );

  createRunningback$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RunningbacksActions.createRunningback),
      pessimisticUpdate({
        run: (action) =>
          this.runningbacksService
            .create(action.runningback)
            .pipe(
              map((runningback: Runningback) =>
                RunningbacksActions.createRunningbackSuccess({ runningback })
              )
            ),
        onError: (action, error) =>
          RunningbacksActions.createRunningbackFailure({ error }),
      })
    )
  );

  updateRunningback$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RunningbacksActions.updateRunningback),
      pessimisticUpdate({
        run: (action) =>
          this.runningbacksService
            .update(action.runningback)
            .pipe(
              map((runningback: Runningback) =>
                RunningbacksActions.updateRunningbackSuccess({ runningback })
              )
            ),
        onError: (action, error) =>
          RunningbacksActions.updateRunningbackFailure({ error }),
      })
    )
  );

  deleteRunningback$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RunningbacksActions.deleteRunningback),
      pessimisticUpdate({
        run: (action) =>
          this.runningbacksService
            .delete(action.runningback)
            .pipe(
              map((runningback: Runningback) =>
                RunningbacksActions.deleteRunningbackSuccess({ runningback })
              )
            ),
        onError: (action, error) =>
          RunningbacksActions.deleteRunningbackFailure({ error }),
      })
    )
  );

  constructor(
    private actions$: Actions,
    private runningbacksService: RunningbacksService
  ) {}
}
