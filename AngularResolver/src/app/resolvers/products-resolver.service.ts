import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs';

import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService implements Resolve<any> {

  constructor(private product: ProductService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> {
    console.log('Called Get Product in resolver...', route);
    return this.product.getProducts().pipe(
      catchError(error => {
        return of(error);
      })
    );
  }
}
