import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { IntroComponent } from './pages/intro/intro.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SlpashComponent } from './pages/slpash/slpash.component';
import { UtilityRoutingModule } from './utility-routing.module';


@NgModule({
  declarations: [
    SlpashComponent,
    IntroComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    UtilityRoutingModule,
    IonicModule,
    SharedModule,
  ],
  exports: [
    NotificationsComponent
  ]
})
export class UtilityModule { }
