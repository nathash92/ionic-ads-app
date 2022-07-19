import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AppNavService } from 'src/app/providers/app-nav.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  @ViewChild('sld') slide!: IonSlides;

  slideOptions = {};

  activeSldIndex: number;

  slideData = [{
    icon: 'bulb-outline'
  }, {
    icon: 'people-outline'
  }, {
    icon: 'chatbubbles-outline'
  }]

  constructor(
    private appNav: AppNavService
  ) {
    this.activeSldIndex = 0;
  }

  ngOnInit(): void {
  }

  async onSlideChange() {
    const a = await this.slide.getActiveIndex();
    this.activeSldIndex = a;
  }

  nextSld() {
    if (this.activeSldIndex == this.slideData.length - 1) {
      this.gotoLogin();
      return;
    }
    this.slide.slideNext();
  }

  skip() {
    this.gotoLogin();
  }

  gotoLogin() {
    this.appNav.nav('auth/login', {
      replaceUrl: true
    });
  }

}
