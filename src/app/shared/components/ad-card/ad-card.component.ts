import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.scss']
})
export class AdCardComponent implements OnInit {

  @Input() template = 1;
  @Input() img: string = '';
  @Input() name = '';
  @Input() location = '';
  @Input() price = '';

  bgImg = {};

  constructor() { }

  ngOnInit(): void {
    this.bgImg = {
      'background-image': "url('/assets/imgs/" + this.img + ".jpeg')"
    };
  }

}
