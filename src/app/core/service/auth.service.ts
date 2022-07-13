import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  loginUser(user: Function, data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/user/login', user(data));
  }

  registerUser(user: Function, data: any): Observable<IUser> {
    return this.http.post<any>('http://localhost:3000/user/register', user(data));
  }
}
