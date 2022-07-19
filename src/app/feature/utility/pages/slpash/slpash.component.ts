import { Component, OnInit } from '@angular/core';
import { AppNavService } from 'src/app/providers/app-nav.service';

@Component({
  selector: 'app-slpash',
  templateUrl: './slpash.component.html',
  styleUrls: ['./slpash.component.scss']
})
export class SlpashComponent implements OnInit {

  constructor(
    private appNav: AppNavService
  ) { }

  ngOnInit(): void {
  }

  ionViewWillEnter() {
    const t = setTimeout(() => {
      clearTimeout(t);
      this.appNav.nav('utility/intro', {
        replaceUrl: true
      });
    }, 3000);
  }

}
