import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCodePageRoutingModule } from './add-code-routing.module';

import { AddCodePage } from './add-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCodePageRoutingModule
  ],
  declarations: [AddCodePage]
})
export class AddCodePageModule {}
