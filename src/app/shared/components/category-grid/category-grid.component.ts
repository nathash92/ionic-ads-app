import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/providers/common.service';

@Component({
  selector: 'app-category-grid',
  templateUrl: './category-grid.component.html',
  styleUrls: ['./category-grid.component.scss']
})
export class CategoryGridComponent implements OnInit {

  menus: Array<any>;

  constructor(
    private commonService: CommonService
  ) {
    this.menus = this.commonService.getCategories();
  }

  ngOnInit(): void {
  }

  viewAll() {
    
  }

}
