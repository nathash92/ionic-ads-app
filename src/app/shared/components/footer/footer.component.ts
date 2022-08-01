import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  tabs = [{
    icn: 'home-outline',
    active: 'home',
    key: 'home',
    lbl: 'Home'
  }, {
    icn: 'search-outline',
    active: 'search',
    key: 'search',
    lbl: 'Search'
  }, {
    icn: 'add-circle',
    active: '',
    key: 'add',
    lbl: ''
  }, {
    icn: 'chatbubble-outline',
    active: 'chatbubble',
    key: 'chat',
    lbl: 'Messages'
  }, {
    icn: 'person-circle-outline',
    active: 'person-circle',
    key: 'profile',
    lbl: 'Profile'
  }];

  activeTab: any;

  constructor() {
    this.activeTab = this.tabs[0];
  }

  ngOnInit(): void {
  }

  onTabClick(tab: any) {
    if (tab.key == 'add') {
      return;
    }
    this.activeTab = tab;
  }

}
