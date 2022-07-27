import { Runningback } from '@runningback-angular/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const resetSelectedRunningback = createAction(
  '[Runningbacks] Reset Selected Runningback'
);
export const resetRunningbacks = createAction(
  '[Runningbacks] Reset Runningbacks'
);

// Select Runningback
export const selectRunningback = createAction(
  '[Runningbacks] Select Runningback',
  props<{ selectedId: string }>()
);

// Load Runningbacks
export const loadRunningbacks = createAction(
  '[Runningbacks] Load Runningbacks'
);

export const loadRunningbacksSuccess = createAction(
  '[Runningbacks] Load Runningbacks Success',
  props<{ runningbacks: Runningback[] }>()
);

export const loadRunningbacksFailure = createAction(
  '[Runningbacks] Load Runningbacks Failure',
  props<{ error: any }>()
);

// Load Runningback
export const loadRunningback = createAction(
  '[Runningbacks] Load Runningback',
  props<{ runningbackId: string }>()
);

export const loadRunningbackSuccess = createAction(
  '[Runningbacks] Load Runningback Success',
  props<{ runningback: Runningback }>()
);

export const loadRunningbackFailure = createAction(
  '[Runningbacks] Load Runningback Failure',
  props<{ error: any }>()
);

// Create Runningback
export const createRunningback = createAction(
  '[Runningbacks] Create Runningback',
  props<{ runningback: Runningback }>()
);

export const createRunningbackSuccess = createAction(
  '[Runningbacks] Create Runningback Success',
  props<{ runningback: Runningback }>()
);

export const createRunningbackFailure = createAction(
  '[Runningbacks] Create Runningback Failure',
  props<{ error: any }>()
);

// Update Runningback
export const updateRunningback = createAction(
  '[Runningbacks] Update Runningback',
  props<{ runningback: Runningback }>()
);

export const updateRunningbackSuccess = createAction(
  '[Runningbacks] Update Runningback Success',
  props<{ runningback: Runningback }>()
);

export const updateRunningbackFailure = createAction(
  '[Runningbacks] Update Runningback Failure',
  props<{ error: any }>()
);

// Delete Runningback
export const deleteRunningback = createAction(
  '[Runningbacks] Delete Runningback',
  props<{ runningback: Runningback }>()
);

export const deleteRunningbackCancelled = createAction(
  '[Runningbacks] Delete Runningback Cancelled'
);

export const deleteRunningbackSuccess = createAction(
  '[Runningbacks] Delete Runningback Success',
  props<{ runningback: Runningback }>()
);

export const deleteRunningbackFailure = createAction(
  '[Runningbacks] Delete Runningback Failure',
  props<{ error: any }>()
);
