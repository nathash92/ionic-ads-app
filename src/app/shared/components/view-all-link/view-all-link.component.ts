import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-all-link',
  templateUrl: './view-all-link.component.html',
  styleUrls: ['./view-all-link.component.scss']
})
export class ViewAllLinkComponent implements OnInit {

  @Input() text = '';

  @Output() callback = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onTap() {
    this.callback.emit();
  }

}
