import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import {HttpModule} from "@angular/http";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import {
  ContactService,
  UtilService
} from './shared';

import {DemoService} from './demo/demo.service'

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HomeModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [ContactService, UtilService, DemoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
