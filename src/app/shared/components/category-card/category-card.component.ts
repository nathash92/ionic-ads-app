import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input() type = 1;
  @Input() icon = '';
  @Input() name = '';
  @Input() count = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
