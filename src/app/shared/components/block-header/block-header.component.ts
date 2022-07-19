import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-block-header',
  templateUrl: './block-header.component.html',
  styleUrls: ['./block-header.component.scss']
})
export class BlockHeaderComponent implements OnInit {

  @Input() title: string = '';
  @Input() showViewMore = true;

  @Output() viewMoreCallback = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
