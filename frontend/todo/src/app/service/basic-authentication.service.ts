import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HelloWorldBean} from './data/welcome-data.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private httpClient: HttpClient) {
  }

  authenticate(username, password) {
    if (username === 'pyavchik' && password === '1111') {
      sessionStorage.setItem('authenticator', username);
      return true;
    } else {
      return false;
    }
  }

  executeAuthenticationService(username, password) {
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    const headers = new HttpHeaders(
      {
        Authorization: basicAuthHeaderString
      }
    );
    return this.httpClient.get<AuthenticationBean>(`http://localhost:8080/basicauth`, {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticator', username);
          return data;
        }
      )
    );
  }


  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticator');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticator');
  }
}

export class AuthenticationBean {
  constructor(public message: string) {
  }
}
