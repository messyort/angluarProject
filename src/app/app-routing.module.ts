import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionComponent } from './collection';
import { ListComponent } from './list';
import { DetailComponent } from './detail';
import { EditComponent } from './edit';
import { DemoComponent } from './demo';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'list/:id',
    component: DetailComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'collection',
    component: CollectionComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }

