import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { StorageService } from '../service/storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private sStorage: StorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.sStorage.getStorage();
    if(token) {

      const clone = request.clone({
        headers: request.headers.set('Autorization', 'Bearer ' + token)
      });
      console.log(clone)
      return next.handle(clone);

    } else {

      return next.handle(request);
    }
  }
}
