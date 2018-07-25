import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
// import { CoreModule } from '../core/core.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { AmountComponent } from '../../components/amount/amout.component';
import { BackgroundColorDirective } from '../../directive/backgroundColor';
@NgModule({
  imports: [CommonModule,LoginRoutingModule,FormsModule,MatButtonModule],
  declarations: [LoginComponent,HeaderComponent,AmountComponent,BackgroundColorDirective],
  exports: [LoginComponent]
})
export class LoginModule { }