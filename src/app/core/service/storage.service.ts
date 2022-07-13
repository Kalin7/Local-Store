import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setStorage(token: {}) {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  getStorage() {
    const user = sessionStorage.getItem('token');
    return JSON.parse(user!)
  }

  clearStorage() {
    sessionStorage.removeItem('token');
  }
}
