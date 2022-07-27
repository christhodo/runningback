import { Runningback } from '@runningback-angular/api-interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  runningbacksAdapter,
  RunningbacksState,
  RUNNINGBACKS_FEATURE_KEY,
} from './runningbacks.reducer';

// Lookup the 'Runningbacks' feature state managed by NgRx
export const getRunningbacksState = createFeatureSelector<RunningbacksState>(
  RUNNINGBACKS_FEATURE_KEY
);

const { selectAll, selectEntities } = runningbacksAdapter.getSelectors();

export const getRunningbacksLoaded = createSelector(
  getRunningbacksState,
  (state: RunningbacksState) => state.loaded
);

export const getRunningbacksError = createSelector(
  getRunningbacksState,
  (state: RunningbacksState) => state.error
);

export const getAllRunningbacks = createSelector(
  getRunningbacksState,
  (state: RunningbacksState) => selectAll(state)
);

export const getRunningbacksEntities = createSelector(
  getRunningbacksState,
  (state: RunningbacksState) => selectEntities(state)
);

export const getSelectedRunningbackId = createSelector(
  getRunningbacksState,
  (state: RunningbacksState) => state.selectedId
);

const emptyRunningback: Runningback = {
  id: null,
  title: '',
  description: '',
};

export const getSelectedRunningback = createSelector(
  getRunningbacksEntities,
  getSelectedRunningbackId,
  (entities, selectedId) => {
    return selectedId ? entities[selectedId] : emptyRunningback;
  }
);
