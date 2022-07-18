import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ActivationLogoutGuard implements CanActivate {

  constructor(
    private router: Router,
    private sAuth: AuthService,
  ){}

  canActivate(): boolean {
    if (this.sAuth.isUser) {
      
      return true;
    }
    this.router.navigate(['/auth/user/login']);
    return false;
  }
  
}
