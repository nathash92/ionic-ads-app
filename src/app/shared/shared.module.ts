import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryGridComponent } from './components/category-grid/category-grid.component';
import { AdCardComponent } from './components/ad-card/ad-card.component';
import { CategoryModalComponent } from './modals/category-modal/category-modal.component';
import { SortModalComponent } from './modals/sort-modal/sort-modal.component';
import { FilterModalComponent } from './modals/filter-modal/filter-modal.component';
import { IonicModule } from '@ionic/angular';
import { ViewAllLinkComponent } from './components/view-all-link/view-all-link.component';
import { BlockHeaderComponent } from './components/block-header/block-header.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CategoryCardComponent,
    CategoryGridComponent,
    AdCardComponent,
    CategoryModalComponent,
    SortModalComponent,
    FilterModalComponent,
    ViewAllLinkComponent,
    BlockHeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CategoryCardComponent,
    CategoryGridComponent,
    AdCardComponent,
    CategoryModalComponent,
    SortModalComponent,
    FilterModalComponent,
    ViewAllLinkComponent,
    BlockHeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
