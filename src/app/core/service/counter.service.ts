import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor(
    private http: HttpClient,
  ) { }

  createVisitorCounter(email: string): Observable<any>  {
    return this.http.post('http://localhost:3000/create/visitor', {email});
  }
}
