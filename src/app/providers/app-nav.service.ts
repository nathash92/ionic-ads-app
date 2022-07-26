import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppNavService {

  constructor(
    private router: Router
  ) { }

  nav(path: string, options: NavigationExtras = {}) {
    this.router.navigate(path.split('/'), options);
  }
}
