import { Injectable } from '@angular/core';
import * as actions from './app.actions';
import { Store } from '@ngrx/store';
import { getUser } from './app.selector';

@Injectable({ providedIn: 'root' })
export class AppFacade {
  constructor(private _store$: Store) {}
  user$ = this._store$.select(getUser);

  switchUser() {
    this._store$.dispatch(actions.switchUser());
  }

  createShift(date: string) {
    this._store$.dispatch(actions.createShift({ date }));
  }
}
