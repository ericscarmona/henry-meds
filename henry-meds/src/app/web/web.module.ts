import { NgModule } from '@angular/core';
import { ProviderComponent } from './provider/provider.component';
import { LayoutComponent } from './layout/layout.component';
import { ClientComponent } from './client/client.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { appReducer, STATE_KEY } from './+state/app.reducer';

@NgModule({
  declarations: [ProviderComponent, LayoutComponent, ClientComponent],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
    MatInputModule,
    FormsModule,
    StoreModule.forFeature(STATE_KEY, appReducer),
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: '',
            component: ProviderComponent,
          },
          {
            path: 'client',
            component: ClientComponent,
          },
        ],
      },
    ]),
  ],
  providers: [],
})
export class WebModule {}
