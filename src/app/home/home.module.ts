import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { PopoverComponent } from './popover.component';
import { GermanCostsPipe } from './german-costs/german-costs.pipe';
import { InvoiceModalComponent } from './invoice-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    PopoverComponent,
    InvoiceModalComponent,
    GermanCostsPipe,
  ],
  entryComponents: [
    PopoverComponent,
    InvoiceModalComponent,
  ]
})
export class HomePageModule { }
