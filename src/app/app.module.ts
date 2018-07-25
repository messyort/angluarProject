import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { DemoModule } from './pages/demo/demo.module';
import {
  ContactService,
  UtilService
} from './shared';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    HomeModule,
    LoginModule,
    DemoModule,
    AppRoutingModule
  ],
  providers: [ContactService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule {}
