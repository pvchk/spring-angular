import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {
  }

  authenticate(username, password) {
    if (username === 'username' && password === '1111') {
      sessionStorage.setItem('authenticator', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticator');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticator');
  }
}
