import { Injectable } from '@angular/core';
import { ExpenseEntry } from '../expense-entry';
import { Observable, retry, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ExpenseEntryService {

	constructor(private httpClient: HttpClient) { }
	private expenseRestUrl = 'http://localhost:8000/api/expense';

	private httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	getExpenseEntries(): Observable<ExpenseEntry[]> {
		return this.httpClient.get<ExpenseEntry[]>(this.expenseRestUrl, this.httpOptions)
			.pipe(retry(3), catchError(this.httpErrorHandler));
	}

	getExpenseEntry(id: number): Observable<ExpenseEntry> {
		return this.httpClient.get<ExpenseEntry>(this.expenseRestUrl + "/" + id, this.httpOptions)
			.pipe(retry(3), catchError(this.httpErrorHandler));
	}

	addExpenseEntry(expenseEntry: ExpenseEntry): Observable<ExpenseEntry> {
		return this.httpClient.post<ExpenseEntry>(this.expenseRestUrl, expenseEntry, this.httpOptions)
			.pipe(retry(3), catchError(this.httpErrorHandler));
	}

	updateExpenseEntry(ExpenseEntry: ExpenseEntry): Observable<ExpenseEntry> {
		return this.httpClient.put<ExpenseEntry>(this.expenseRestUrl + "/" + ExpenseEntry.id, ExpenseEntry, this.httpOptions)
			.pipe(retry(3), catchError(this.httpErrorHandler));
	}

	deleteExpenseEntry(expenseEntry: ExpenseEntry | number) : Observable<ExpenseEntry> {
		const id = typeof expenseEntry == 'number' ? expenseEntry : expenseEntry.id
		const url = `${this.expenseRestUrl}/${id}`;
	 
		return this.httpClient.delete<ExpenseEntry>(url, this.httpOptions)
		.pipe(
		   retry(3),
		   catchError(this.httpErrorHandler)
		);
	}

	private httpErrorHandler(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			console.error("A client side error occurs. The erro message is " + error.message);
		} else {
			console.error("An error happened in server. The HTTP status code is " + error.status + " and the error returned is " + error.message);
		}

		return throwError("Error occured. Please try again.");
	}
}
