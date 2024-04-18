import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { AngularmaterialModule } from '../angularmaterial.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RedondeoPipe } from './redondeo.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    PaginationComponent,
    RedondeoPipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    AngularmaterialModule,
    FormsModule
  ]
})
export class ProductModule { }
