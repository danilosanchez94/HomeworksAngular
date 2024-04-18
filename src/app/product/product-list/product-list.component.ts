import { Component, OnInit } from '@angular/core';
import { Product } from '../../app-data/products/product';
import { ProductsService } from '../../app-data/products/products.service';
import { Observable, Subject, combineLatest, map, startWith } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit  {
  public constructor(
    private readonly productService: ProductsService,
    public route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.filterOfferSubject$$.next(false);
  }
  protected filterValue: string = '';
  protected offerBool: boolean = false;
  public products$: Observable<Array<Product>> = this.productService.products$;
  private readonly filterSubject$$: Subject<string> = new Subject<string>();
  private readonly filter$: Observable<string> = this.filterSubject$$.asObservable();

    private readonly filterOfferSubject$$: Subject<boolean> = new Subject<boolean>();
    private readonly filterOffer$: Observable<boolean> =this.filterOfferSubject$$.asObservable();



  protected filteredProduct$: Observable<Array<Product>> = combineLatest(
    this.products$,
    this.filterOffer$.pipe(startWith(false)),
    this.filter$.pipe(startWith(''))
  ).pipe(
    map(([products, offer, filter]: [Array<Product>,boolean , string]): Array<Product> => {
      console.log(offer)
      console.log(filter)
      filter = filter.toLowerCase();
     products= products.filter((product: Product): boolean =>
      offer? product.offerDiscount!=null:product!=null);
  
      return  products.filter((product: Product): boolean =>
        product.title.includes(filter)
      );
  
    })
  );

  protected offers(event: boolean) {
    this.filterOfferSubject$$.next(event);
   
  }
  protected filterChangeHandler(event: string): void {
    console.log("text")
    this.filterSubject$$.next(event);
  }

}
