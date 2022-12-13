import { User } from './models/user.model';
import { Shift } from './models/shift.model';
import { Action } from '@ngrx/store';
import { mockProvider, mockClient } from './models/user.mock';
import * as actions from './app.actions';
import { UserType } from './models/user.enum';
export const STATE_KEY = 'state_key';

export interface AppState {
  user: User;
  allShifts: Shift[];
}

export const initialState: AppState = {
  user: mockProvider,
  allShifts: [],
};

export function appReducer(state: AppState = initialState, action: Action) {
  switch (action.type) {
    case actions.switchUser.type: {
      let userType = state.user.userType;

      return {
        ...state,
        user: userType === UserType.PROVIDER ? mockClient : mockProvider,
      };
    }
    case actions.createShift.type: {
      /**
       * logic to add shift to allShifts array
       */
    }
  }
  return state;
}
