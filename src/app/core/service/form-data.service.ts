import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor() { }

  getUserRegisterData(data: any) {
    return {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      password: data.password
    }
  }

  getUserLoginData(data: any) {
    return {
      email: data.email,
      password: data.password
    }
  }
}
