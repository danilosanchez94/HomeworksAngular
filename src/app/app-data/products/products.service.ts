import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from './product';
import { Observable, Subject, combineLatest, map } from 'rxjs';

type product_Id = Product['id'];
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUrl: string = 'api/products';
  private http: HttpClient = inject(HttpClient);
  private productSelectedSubject$$: Subject<product_Id> = new Subject<product_Id>();

  constructor() { }

  private productSelected$: Observable<product_Id> =
    this.productSelectedSubject$$.asObservable();
  public readonly products$: Observable<Array<Product>> = this.http.get<
  Array<Product>
>(this.productsUrl);

public readonly productDetail$: Observable<Product> = combineLatest({
  products: this.products$,
  productSelected: this.productSelected$,
}).pipe(
  map(
    ({
      products,
      productSelected,
    }: {
      products: Array<Product>;
      productSelected: product_Id;
    }): Product => {
      return products.find(
        (album: Product): boolean => album.id === productSelected
      ) as Product;
    }
  )
);

  public selectAlbum(id: product_Id): void {
    this.productSelectedSubject$$.next(id);
  }
}
