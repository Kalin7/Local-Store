import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setStorage(user: {}) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  getStorage() {
    const user = sessionStorage.getItem('user');
    return JSON.parse(user!)
  }
}
