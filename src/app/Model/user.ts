import { ICliente } from '../Models/icliente';
import { Phone } from './phone';
import { Address } from './address';

export class User implements ICliente {
    id: string;
    lastVisit: Date;
    addDate: Date;
    name: string;
    email: string;
    birthday: Date;
    gender: string;
    phone: Phone;
    address: Address;

    /**
     *
     */
    constructor(data: Partial<ICliente>) {
        Object.assign(this, data);
    }
}
