import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  
  {
    path: 'document/:projectId/:id',
    loadChildren: () => import('./document/document.module').then( m => m.DocumentPageModule)
  },
  {
    path: 'codes',
    loadChildren: () => import('./codes/codes.module').then( m => m.CodesPageModule)
  },
  {
    path: 'add-code',
    loadChildren: () => import('./add-code/add-code.module').then( m => m.AddCodePageModule)
  },
  {
    path: 'add-project',
    loadChildren: () => import('./add-project/add-project.module').then( m => m.AddProjectPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
