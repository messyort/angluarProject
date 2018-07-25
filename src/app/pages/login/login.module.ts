import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule ,MatTabsModule,MatCardModule } from '@angular/material';

// import { CoreModule } from '../core/core.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { AmountComponent } from '../../components/amount/amout.component';
import { BackgroundColorDirective } from '../../directive/backgroundColor';
import { unlessDirective } from '../../directive/unless'
import { SharedService } from '../../utils/sharedService';
@NgModule({
  imports: [CommonModule,LoginRoutingModule,FormsModule,MatButtonModule,MatTabsModule,MatCardModule],
  declarations: [LoginComponent,HeaderComponent,AmountComponent,BackgroundColorDirective,unlessDirective],
  exports: [LoginComponent,HeaderComponent],
  providers:[SharedService]
})
export class LoginModule { }