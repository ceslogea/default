import { IAddress } from '../Models/iadress';

export class Address implements IAddress {
    cep: '';
    logradouro: '';
    complemento: '';
    bairro: '';
    localidade: '';
    uf: '';
    unidade: '';
    ibge: '';
    gia: '';
    erro: boolean;
}
