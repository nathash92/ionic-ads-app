import { Component, OnInit } from '@angular/core';
import { AppModalService } from 'src/app/providers/app-modal.service';
import { AppNavService } from 'src/app/providers/app-nav.service';
import { CategoryModalComponent } from 'src/app/shared/modals/category-modal/category-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private appModal: AppModalService,
    private appNav: AppNavService
  ) { }

  ngOnInit(): void {
  }

  async openCategoryModal() {
    const m = await this.appModal.show({
      component: CategoryModalComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.25, 0.5, 0.75, 1]
    })
  }

  viewNotification() {
    this.appNav.nav('/utility/notifications');
  }

}
