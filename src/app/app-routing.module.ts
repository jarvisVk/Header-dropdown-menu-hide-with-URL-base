import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleryComponent } from '../app/page/gallery/gallery.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  // {
  //   path: '',
  //   component: AppComponent,
  //   children: [
  //     {
  //       path: 'dashboard',
  //       loadChildren: () =>
  //       import('../app/page/dashboard/dashboard.module').then(m => m.DashboardModule),
  //     },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
