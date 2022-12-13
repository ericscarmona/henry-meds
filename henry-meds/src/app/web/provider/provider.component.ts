import { Component } from '@angular/core';
import { AppFacade } from '../+state/app.facade';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss'],
})
export class ProviderComponent {
  constructor(private _facade: AppFacade) {}

  myDatePicker: any;

  dateChange(event: any) {
    this._facade.createShift(this.myDatePicker.value);
  }
}
