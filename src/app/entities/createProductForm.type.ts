export type ProductT = {
    title: string;
    description: string;
  };
  
  export type ProductPricesT = {
    tag: string;
    price: number;
  };

  export type ProductPhotosT = string;


  export type ProductFormT = {
    product: ProductT;
    prices: Array< ProductPricesT>;
    photos: Array<ProductPhotosT>;

  };
  