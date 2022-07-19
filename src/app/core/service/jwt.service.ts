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

  decodeUserToken(token: string): {id: string} {
    return this.helper.decodeToken(token);
  }

  isUserTokenExpired(token: string) {
    return this.helper.isTokenExpired(token);
  }
}
