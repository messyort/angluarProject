import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
// import { CoreModule } from '../core/core.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  imports: [CommonModule,LoginRoutingModule,FormsModule,MatButtonModule],
  declarations: [LoginComponent,HeaderComponent],
  exports: [LoginComponent]
})
export class LoginModule { }