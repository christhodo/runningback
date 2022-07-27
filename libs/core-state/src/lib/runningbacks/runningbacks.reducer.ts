import { Runningback } from '@runningback-angular/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as RunningbacksActions from './runningbacks.actions';

export const RUNNINGBACKS_FEATURE_KEY = 'runningbacks';

export interface RunningbacksState extends EntityState<Runningback> {
  selectedId?: string | number; // which runningbacks record has been selected
  loaded: boolean; // has the runningbacks list been loaded
  error?: string | null; // last known error (if any)
}

export interface RunningbacksPartialState {
  readonly [RUNNINGBACKS_FEATURE_KEY]: RunningbacksState;
}

export const runningbacksAdapter: EntityAdapter<Runningback> = createEntityAdapter();

export const initialRunningbacksState: RunningbacksState = runningbacksAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const onFailure = (state, { error }) => ({ ...state, error });

const _runningbacksReducer = createReducer(
  initialRunningbacksState,
  on(RunningbacksActions.selectRunningback, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(RunningbacksActions.resetSelectedRunningback, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
  on(RunningbacksActions.resetRunningbacks, (state) =>
    runningbacksAdapter.removeAll(state)
  ),
  // Load runningbacks
  on(RunningbacksActions.loadRunningbacks, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(RunningbacksActions.loadRunningbacksSuccess, (state, { runningbacks }) =>
    runningbacksAdapter.setAll(runningbacks, { ...state, loaded: true })
  ),
  on(RunningbacksActions.loadRunningbacksFailure, onFailure),
  // Load runningback
  on(RunningbacksActions.loadRunningback, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(RunningbacksActions.loadRunningbackSuccess, (state, { runningback }) =>
    runningbacksAdapter.upsertOne(runningback, { ...state, loaded: true })
  ),
  on(RunningbacksActions.loadRunningbackFailure, onFailure),
  // Add runningback
  on(RunningbacksActions.createRunningbackSuccess, (state, { runningback }) =>
    runningbacksAdapter.addOne(runningback, state)
  ),
  on(RunningbacksActions.createRunningbackFailure, onFailure),
  // Update runningback
  on(RunningbacksActions.updateRunningbackSuccess, (state, { runningback }) =>
    runningbacksAdapter.updateOne(
      { id: runningback.id, changes: runningback },
      state
    )
  ),
  on(RunningbacksActions.updateRunningbackFailure, onFailure),
  // Delete runningback
  on(RunningbacksActions.deleteRunningbackSuccess, (state, { runningback }) =>
    runningbacksAdapter.removeOne(runningback.id, state)
  ),
  on(RunningbacksActions.deleteRunningbackFailure, onFailure)
);

export function runningbacksReducer(
  state: RunningbacksState | undefined,
  action: Action
) {
  return _runningbacksReducer(state, action);
}
