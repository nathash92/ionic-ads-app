import { Component, OnInit } from '@angular/core';
import { AppNavService } from 'src/app/providers/app-nav.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

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

  gotoSignIn() {
    this.appNav.nav('auth/login');
  }

  gotoHome() {
    this.appNav.nav('ads/home');
  }

}
