import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api/api.service';
import { IAddress } from '../../Models/iadress';

@Injectable()
export class ViaCepService {


  constructor(private _apiService: ApiService,  private toastr: ToastrService) { }

  getAddressByZipCode(zipcode: string): Observable<IAddress> {
    return this._apiService.get<IAddress>(`https://viacep.com.br/ws/${zipcode}/json/`);
  }

  onClickZipcode(searchAddress: IAddress, zipcode: string) {
    zipcode = zipcode.replace('-', '');

    if (this.verifyZipcode(zipcode)) {
      this.getAddressByZipCode(zipcode)
        .subscribe(
          address => {
            if (address.erro === true) {
              searchAddress = undefined;
              this.toastr.warning('ZIP Code not found.', 'Ops...');
            } else {
              searchAddress = address;
            }
          },
          error => {
            this.toastr.error('Error: ${error.message}.', 'Ops...');
            searchAddress = undefined;
          }
        );
    } else {
      this.toastr.error('Enter a valid ZIP Code.', 'Ops...');
      searchAddress = undefined;
    }
  }

  verifyZipcode(zipcode: string): boolean {
    if (zipcode.length === 8) {
      return true;
    }

    return false;
  }

}
