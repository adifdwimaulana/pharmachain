import { Principal } from '@ic-reactor/react/dist/types';

export type User = {
  internet_identity: Principal;
  username: string;
  email: string;
  role: string;
  address: string;
  isAuthorize: boolean;
};
