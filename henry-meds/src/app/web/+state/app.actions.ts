import { createAction, props } from '@ngrx/store';

export const switchUser = createAction('[App] Switch User');

export const createShift = createAction(
  '[App], Create Shift',
  props<{ date: string }>()
);
