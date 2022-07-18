import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { JwtService } from '../service/jwt.service';
import { StorageService } from '../service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ActivationLoginGuard implements CanActivate {

  isToken!:string;

  constructor(
    private router: Router,
    private sStorage: StorageService,
    private sJwt: JwtService,
    private sAuth: AuthService,
  ){}

  canActivate(): boolean {
    
    this.isToken = this.sStorage.getStorage();
    const e = this.sJwt.isUserTokenExpired(this.isToken);
    if(this.isToken && !e) {
      this.sAuth.getIsUserLogedIn(true);
      this.router.navigate(['/home']);
      return false;
    }
    
    return true;
  }
  
}
