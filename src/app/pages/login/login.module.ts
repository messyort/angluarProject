import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { CoreModule } from '../core/core.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  imports: [CommonModule,LoginRoutingModule],
  declarations: [LoginComponent,HeaderComponent],
  exports: [LoginComponent]
})
export class LoginModule { }