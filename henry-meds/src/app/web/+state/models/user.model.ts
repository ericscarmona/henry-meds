import { UserType } from './user.enum';
import { Shift, Slot } from './shift.model';

export interface User {
  id: number;
  name: string;
  userType: UserType;
}

export interface Provider extends User {
  shifts: Shift[];
}

export interface Client extends User {
  slotsBooked: Slot[];
}
