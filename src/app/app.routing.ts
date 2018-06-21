import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const appRouting: Routes =  [
    //  { path: '', component: AppComponent },
     { path: 'login', component: LoginComponent },
     { path: 'register', component: RegisterComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRouting)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
