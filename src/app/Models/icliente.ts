import { IAddress } from './iadress';
import { IPhone } from './iphone';

export interface ICliente {
    id: string;
    lastVisit: Date;
    addDate: Date;
    name: string;
    email: string;
    birthday: Date;
    gender: string;
    phone: IPhone;
    address: IAddress;
}
