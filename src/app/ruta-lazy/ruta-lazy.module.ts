import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutalazycompComponent } from './components/rutalazycomp/rutalazycomp.component';
import { RutalazyRoutingModule } from './rutalazy-routing.module';



@NgModule({
  declarations: [
    RutalazycompComponent
  ],
  imports: [
    CommonModule,
    RutalazyRoutingModule
  ]
})
export class RutaLazyModule { }
