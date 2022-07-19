import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { IUser } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUser: boolean = false;
  private _isLogin: Subject<boolean> = new Subject();
  islogedIn$ = this._isLogin.asObservable();

  constructor(
    private http: HttpClient,
  ) { }

  loginUser(user: Function, data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/user/login', user(data));
  }

  registerUser(user: Function, data: any): Observable<IUser> {
    return this.http.post<any>('http://localhost:3000/user/register', user(data));
  }

  logoutUser(data: {token: string, id: string}): Observable<any> {
    return this.http.post<any>('http://localhost:3000/user/logout', data);
  }

  getIsUserLogedIn(current: boolean) {
    this.isUser = current;
    this._isLogin.next(current);
  }

}
