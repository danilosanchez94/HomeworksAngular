import { AfterViewInit, Component } from '@angular/core';
import { Product } from '../../app-data/products/product';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../app-data/products/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements AfterViewInit{

  public constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly productsService: ProductsService
  ) {}

  protected productDetail$: Observable<Product> = this.productsService.productDetail$;


  public ngAfterViewInit(): void {
    this.activatedRoute.params.subscribe((params: Params): void => {
      return this.productsService.selectAlbum(params['id']);
    });
  }
}
