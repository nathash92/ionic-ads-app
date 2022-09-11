import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SlpashComponent } from './pages/slpash/slpash.component';

const routes: Routes = [
  { path: 'splash', component: SlpashComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'notifications', component: NotificationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilityRoutingModule { }
