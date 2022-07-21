import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { IUser } from '../interface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUser?: boolean;
  private _isLogin: Subject<boolean> = new Subject();
  islogedIn$ = this._isLogin.asObservable();

  constructor(
    private http: HttpClient,
    private sStorage: StorageService,
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

  isTokenBlacklisted(token: string, id: string): Observable<any> {
    return this.http
                .get<any>(`http://localhost:3000/user/${id}`)
                .pipe(map((res: any) => {
                  if (res.tokenBlackList.includes(token)) {
                    this.isUser = false;
                  }else {
                    this.isUser = true;
                  }
                  return this.isUser;
                }));
  }

  userSendEmail(user: any) : Observable<any> {
    return this.http.post<any>('http://localhost:3000/user/send-email', user);
  }

  getIsUserLogedIn(current: boolean) {
    this.isUser = current;
    this._isLogin.next(current);
  }

 

}
