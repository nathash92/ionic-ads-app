import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilityRoutingModule } from './utility-routing.module';
import { SlpashComponent } from './pages/slpash/slpash.component';
import { IonicModule } from '@ionic/angular';
import { IntroComponent } from './pages/intro/intro.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';


@NgModule({
  declarations: [
    SlpashComponent,
    IntroComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    UtilityRoutingModule,
    IonicModule
  ],
  exports: [
    NotificationsComponent
  ]
})
export class UtilityModule { }
