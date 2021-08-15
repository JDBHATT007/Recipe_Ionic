import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'recepies',
    pathMatch: 'full'
  },
  {
    path: 'recepies',
    children:[
      {
        path: '',
        loadChildren: () => import('./recepies/recepies.module').then( m => m.RecepiesPageModule)
      },
      {
        path: ':recepieId',
        loadChildren: () => import('./recepies/recepie-detail/recepie-detail.module').then( m => m.RecepieDetailPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
