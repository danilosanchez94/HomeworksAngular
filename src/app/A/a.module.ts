import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARoutingModule } from './a-routing.module';
import { A1Component } from './components/a1/a1.component';
import { A2Component } from './components/a2/a2.component';
import { A3Component } from './components/a3/a3.component';
import { Z1Component } from '../Z/components/z1/z1.component';

@NgModule({
  declarations: [A1Component, A2Component, A3Component, Z1Component],
  imports: [CommonModule, ARoutingModule],
  exports: [Z1Component],
})
export class AModule {}
