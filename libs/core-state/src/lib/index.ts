import { Params } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import * as fromRunningbacks from './runningbacks/runningbacks.reducer';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

// ---------------------------------------
// Core State and Reducers
// ---------------------------------------

export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  [fromRunningbacks.RUNNINGBACKS_FEATURE_KEY]: fromRunningbacks.RunningbacksState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  [fromRunningbacks.RUNNINGBACKS_FEATURE_KEY]:
    fromRunningbacks.runningbacksReducer,
};
