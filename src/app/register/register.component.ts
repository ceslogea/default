import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ICliente } from '../Models/icliente';
import { User } from '../Model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  mainForm: FormGroup;
  user: ICliente;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.user = new User({ email: '', name: '', gender: '' });

    console.log(group);
    this.mainForm = this._formBuilder.group({
      name: { value: this.user.name, disabled: false },
      email: { value: this.user.email, disabled: false },
      gender: { value: this.user.gender, disabled: false },
      id: { value: this.user.id, disabled: false },
      MyControl2: '',
    });

  }

  objectoToFromGroup(obj: object) {
    const group = {};
    Object.keys(obj).forEach(key => {
      if (typeof (obj[key]) === 'object') {
        group[key] = this.objectoToFromGroup(obj[key]);
      } else {
        group[key] = { value: obj[key] };
      }
    });
    return group;
  }
  teste(e) {
    console.log(e);
  }
}
