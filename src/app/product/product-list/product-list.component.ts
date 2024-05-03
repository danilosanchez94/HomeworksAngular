import { Component, OnInit } from '@angular/core';
import { Product } from '../../app-data/products/product';
import { ProductsService } from '../../app-data/products/products.service';
import { Observable, Subject, combineLatest, map, startWith, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateProductComponent } from '../dialog-create-product/dialog-create-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit  {
  public constructor(
    private readonly productService: ProductsService,
    public route: ActivatedRoute,
    public dialog: MatDialog
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

    private readonly AddNewSubject$$: Subject<Product | null> = new Subject<Product |null>();
    private readonly AddNew$: Observable<Product |null> =this.AddNewSubject$$.asObservable();

  protected filteredProduct$: Observable<Array<Product>> = combineLatest(
    this.products$,
    this.filterOffer$.pipe(startWith(false)),
    this.filter$.pipe(startWith('')),
    this.AddNew$.pipe(startWith(null))
  ).pipe(
    map(([products, offer, filter, newItem]: [Array<Product>,boolean , string,Product| null]): Array<Product> => {
      console.log(offer)
      console.log(filter)
      filter = filter.toLowerCase();
      if(newItem!=null){
       const id= Number(products[products.length-1].id)+1;
        newItem.id=String(id);
        products.push(newItem as Product);
      }
     products= products.filter((product: Product): boolean =>
      offer? product.offerDiscount!=null:product!=null);
     products=products.filter((product: Product): boolean =>
      product.title.includes(filter)
    );
      return  products;
  
    })
  );

  protected offers(event: boolean) {
    this.AddNewSubject$$.next(null)
    this.filterOfferSubject$$.next(event);
   
  }
  protected filterChangeHandler(event: string): void {
    console.log("text")
    this.AddNewSubject$$.next(null)
    this.filterSubject$$.next(event);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCreateProductComponent, {
      height: '80%',
      width: '60%',
  });

    dialogRef.afterClosed().subscribe(result => {
      const keyValueObject: { [tag: string]: number } = result.prices.reduce((acc: { [x: string]: number; }, obj: { tag: string; price: number; }) => {
        acc[obj.tag] = Number(obj.price);
        return acc;
      }, {});
      this.AddNewSubject$$.next({id:"",title:result.product.title,description:result.product.description,photos:result.photos,prices:keyValueObject}as Product)

      
    });
  }
}
