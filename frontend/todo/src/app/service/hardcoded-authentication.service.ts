import {Injectable} from '@angular/core';
import {AUTHENTICATED_USER} from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {
  }

  authenticate(username, password) {
    if (username === 'pyavchik' && password === '1111') {
      sessionStorage.setItem(AUTHENTICATED_USER, username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
  }
}
