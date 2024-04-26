import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { ProductPhotosT, ProductPricesT, ProductT } from "../../entities/createProductForm.type";

export type ProductFormGroupT = FormGroup<{
    title: FormControl<ProductT['title']>;
    description: FormControl<ProductT['description']>;
  }>;



  export type ProductPricesFormGroupT = FormGroup<{
    tag: FormControl<ProductPricesT['tag']>;
    price: FormControl<ProductPricesT['price']>;
  }>;
  
  export type ProductPhotosFormGroupT = FormControl<ProductPhotosT>;


  export type ProductFormGroup = FormGroup<{
    product: ProductFormGroupT; 
    prices: FormArray<ProductPricesFormGroupT>;
    photos: FormArray<ProductPhotosFormGroupT>;
  }>;
  