import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { CoreModule } from '../core/core.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
// import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,   
  ],  
  exports: [HomeComponent]
})
export class HomeModule { }