import { Component } from '@angular/core';
import { Product } from '../../app-data/products/product';
import { ProductsService } from '../../app-data/products/products.service';
import { Observable, Subject, combineLatest, map, startWith } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  public constructor(
    private readonly productService: ProductsService,
    public route: ActivatedRoute
  ) {}

  public products$: Observable<Array<Product>> = this.productService.products$;
  private readonly filterSubject$$: Subject<string> = new Subject<string>();
  private readonly filter$: Observable<string> =
    this.filterSubject$$.asObservable();

  protected filteredProduct$: Observable<Array<Product>> = combineLatest(
    this.products$,
    this.filter$.pipe(startWith(''))
  ).pipe(
    map(([products, filter]: [Array<Product>, string]): Array<Product> => {
      filter = filter.toLowerCase();
      return products.filter((product: Product): boolean =>
        product.title.includes(filter)
      );
    })
  );


}
