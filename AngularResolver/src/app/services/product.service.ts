import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, retry, throwError, catchError } from 'rxjs';

import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'https://fakestoreapi.com/products?limit=6';

  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url)
      .pipe(retry(3), catchError(this.httpErrorHandler));
  }

  private httpErrorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("A client side error occurs. The error message is " + error.message);
    } else {
      console.error("An error happened in server. The HTTP status code is " + error.status + " and the error returned is " + error.message);
    }
    return throwError("Error occured. Please try again.");
  }
}
