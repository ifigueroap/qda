import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodesPageRoutingModule } from './codes-routing.module';

import { CodesPage } from './codes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodesPageRoutingModule
  ],
  declarations: [CodesPage]
})
export class CodesPageModule {}
