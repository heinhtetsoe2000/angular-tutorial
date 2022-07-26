import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent {
  title = 'angular-service';

  products: Product[] = [];

  constructor(private productService:ProductService) {
    //this.productService = new ProductService();
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }
}
