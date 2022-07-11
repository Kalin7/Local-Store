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

  registerUser(user: Function, data: any): Observable<IUser> {
    const d = user(data);
    return this.http.post<any>('http://localhost:3000/user/register', d);
  }
}
