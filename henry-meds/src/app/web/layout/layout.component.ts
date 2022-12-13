import { Component } from '@angular/core';
import { AppFacade } from '../+state/app.facade';
import { UserType } from '../+state/models/user.enum';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  constructor(private _facade: AppFacade) {}

  user$ = this._facade.user$;
  UserType = UserType;
  switchUser() {
    this._facade.switchUser();
  }
}
