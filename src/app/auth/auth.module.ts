import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { FormValidComponent } from './form-valid/form-valid.component';
import { FormErrorComponent } from './form-error/form-error.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    FormValidComponent,
    FormErrorComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    FormValidComponent,
    FormErrorComponent,
    LogoutComponent
  ]
})
export class AuthModule { }
