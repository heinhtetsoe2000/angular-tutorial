import { Injectable } from "@angular/core";
import { Product } from "../interfaces/product";
@Injectable({
  providedIn:'root'
})
export class ProductService {
  products: Product[] = [
    {
      productID: 1,
      name: 'Memory Card',
      price: 500,
    },
    {
      productID: 2,
      name: "Pen Drive",
      price: 500,
    },
    {
      productID: 3,
      name: 'Power Bank',
      price: 100,
    }
  ];

  public getProducts() {
    return this.products;
  }
}