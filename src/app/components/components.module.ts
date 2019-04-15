import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    ProfileMenuComponent
  ],
  entryComponents: [
    ProfileMenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
