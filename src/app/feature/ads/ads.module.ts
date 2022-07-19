import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { IonicModule } from '@ionic/angular';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    AdsRoutingModule,
    IonicModule,
    SharedModule
  ],
  exports: [
    CategoriesComponent,
    ListComponent,
    DetailComponent
  ]
})
export class AdsModule { }
