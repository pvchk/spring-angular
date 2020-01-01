import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'username';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor() {
  }

  ngOnInit() {
  }

  handleLogin() {
    this.invalidLogin = !(this.username === 'username' && this.password === '1111');
  }
}
