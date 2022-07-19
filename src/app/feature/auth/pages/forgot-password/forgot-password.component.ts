import { Component, OnInit } from '@angular/core';
import { AppNavService } from 'src/app/providers/app-nav.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    private appNav: AppNavService
  ) { }

  ngOnInit(): void {
  }

  gotoSignIn() {
    this.appNav.nav('auth/login');
  }

  gotoSignup() {
    this.appNav.nav('auth/signup');
  }

  gotoHome() {
    this.appNav.nav('ads/home');
  }

}
