import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {
  }

  authenticate(username, password) {
    if (username === 'username' && password === '1111') {
      sessionStorage.setItem('authenticater', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticater');
    return !(user === null);
  }
}
