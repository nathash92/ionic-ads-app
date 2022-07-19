import { Component, OnInit } from '@angular/core';
import { AppNavService } from 'src/app/providers/app-nav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showPwd: boolean;

  constructor(
    private appNav: AppNavService
  ) {
    this.showPwd = false;
  }

  ngOnInit(): void {
  }

  togglePwd() {
    this.showPwd = !this.showPwd;
  }

  gotoSignup() {
    this.appNav.nav('auth/signup');
  }

  gotoHome() {
    this.appNav.nav('ads/home');
  }

  signIn() {
    this.appNav.nav('ads/home');
  }

  forgotPwd() {
    this.appNav.nav('auth/forgot-password');
  }

}
