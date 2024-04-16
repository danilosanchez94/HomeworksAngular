import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B1Component } from './components/b1/b1.component';
import { B2Component } from './components/b2/b2.component';
import { B3Component } from './components/b3/b3.component';
import { BRoutingModule } from './b-routing.module';
import { Z2Component } from '../Z/components/z2/z2.component';


@NgModule({
  declarations: [
    B1Component,
    B2Component,
    B3Component,
    Z2Component
  ],
  imports: [
    CommonModule,
    BRoutingModule
  ],
  exports:[Z2Component]
})
export class BModule { }
