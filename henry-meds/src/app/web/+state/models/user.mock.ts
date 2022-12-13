import { User } from './user.model';
import { UserType } from './user.enum';
import { Provider, Client } from './user.model';

export const mockProvider: Provider = {
  id: 1,
  name: 'Provider 1',
  userType: UserType.PROVIDER,
  shifts: [],
};

export const mockClient: Client = {
  id: 2,
  name: 'Client 1',
  userType: UserType.CLIENT,
  slotsBooked: [],
};
