import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { AngularmaterialModule } from '../angularmaterial.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    AngularmaterialModule,
  ]
})
export class ProductModule { }
