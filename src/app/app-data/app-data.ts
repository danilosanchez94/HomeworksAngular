import { InMemoryDbService } from "angular-in-memory-web-api";
import { Product } from "./products/product";
import { ProductData } from "./products/product.data";

export class AppData implements InMemoryDbService {
  public createDb(): { products: Array<Product> } {
    const products: Array<Product> = ProductData.products;

    return { products };
  }
}
