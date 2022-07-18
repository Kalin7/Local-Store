import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  helper = new JwtHelperService();
  constructor(
    private sStorage: StorageService,
  ) { }

  decodeUserToken(token: string) {
    const d = this.helper.decodeToken(token);
    console.log(d);
    const isExpired = this.helper.isTokenExpired(token);
    console.log(isExpired);
  }

  isUserTokenExpired(token: string) {
    return this.helper.isTokenExpired(token);
  }
}
