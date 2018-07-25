import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatTabsModule, MatCardModule,MatInputModule } from '@angular/material';
import { DemoComponent } from './demo.component';
import { DemoItemComponent } from './demoItem.component';
import { LoginModule } from '../login/login.module';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoService } from './demo.service';
import { SharedService } from '../../utils/sharedService';

@NgModule({
  imports: [CommonModule, DemoRoutingModule,FormsModule, MatButtonModule, MatTabsModule, MatCardModule,MatInputModule,LoginModule ],
  declarations: [DemoComponent,DemoItemComponent],
  exports: [DemoComponent],
  providers: [DemoService,SharedService]
})
export class DemoModule { }