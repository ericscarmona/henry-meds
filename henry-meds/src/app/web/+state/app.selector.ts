import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, STATE_KEY } from './app.reducer';

export const getAppState = createFeatureSelector<AppState>(STATE_KEY);

export const getUser = createSelector(
  getAppState,
  (state: AppState) => state.user
);
