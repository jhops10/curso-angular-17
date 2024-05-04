import { IAddress } from './address-placeholder.interface';
import { ICompany } from './company-placeholder.interface';

export interface IUserPlaceholder {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}
