import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivationLoginGuard } from '../core/guards/activation-login.guard';
import { ActivationLogoutGuard } from '../core/guards/activationLogout.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'user/register', component: RegisterComponent, canActivate: [ActivationLoginGuard]},
  {path: 'user/login', component: LoginComponent, canActivate: [ActivationLoginGuard]},
  {path: 'user/logout', component: LogoutComponent, canActivate: [ActivationLogoutGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
