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

  createVisitorCounter(id: string): Observable<any>  {
    return this.http.post('http://localhost:3000/create/visitor', {id});
  }

  getNumberOfVisitors(): Observable<number> {
    return this.http.get<number>('http://localhost:3000/counter');
  }
}
