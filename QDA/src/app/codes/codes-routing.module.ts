import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodesPage } from './codes.page';

const routes: Routes = [
  {
    path: '',
    component: CodesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodesPageRoutingModule {}
