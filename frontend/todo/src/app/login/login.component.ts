import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'username';
  password = '';

  constructor() {
  }

  ngOnInit() {
  }

  handleLogin() {
    console.log('login: ' + this.username);
    console.log('password: ' + this.password);
  }
}
