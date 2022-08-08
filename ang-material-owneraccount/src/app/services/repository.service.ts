import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { MovieList } from '../interfaces/movie-list';
import { ExpenseEntry } from '../interfaces/expense-entry';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  private resUrl = 'http://localhost:3000/movie/list';
  private expenseRestUrl = 'http://localhost:8000/api/expense';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getData(): Observable<MovieList[]>{
    return this.http.get<MovieList[]>(this.resUrl, this.httpOptions)
      .pipe(retry(3), catchError(this.httpErrorHandler));
  }

  getExpenseEnteries(): Observable<ExpenseEntry[]> {
    return this.http.get<ExpenseEntry[]>(this.expenseRestUrl, this.httpOptions)
      .pipe(retry(3), catchError(this.httpErrorHandler));
  }

  private httpErrorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Client side error has occured.');
    } else {
      console.error('Server side error has occured.');
    }

    return throwError(error);
  }
}
