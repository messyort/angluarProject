import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component'
// import { LoginComponent } from './pages/Login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule],
})
export class AppRoutingModule { }

