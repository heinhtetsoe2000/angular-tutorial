import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from '../expense-entry';
import { DebugService } from '../services/debug.service';
import { ExpenseEntryService } from '../services/expense-entry.service';

@Component({
    selector: 'app-expense-entry-list',
    templateUrl: './expense-entry-list.component.html',
    styleUrls: ['./expense-entry-list.component.css'],
    providers: [DebugService],
})
export class ExpenseEntryListComponent implements OnInit {

    title: string = '';
    expenseEntries: ExpenseEntry[] = [];
    displayedColumns: string[] = ['item', 'amount', 'category', 'location', 'spendOn'];

    constructor(private debugService: DebugService,
                private restService: ExpenseEntryService) { }

    ngOnInit() {
        this.debugService.info("Expense Entry List component initialized");
        this.title = 'Expense Entry List';
        this.getExpenseItems();
    }

    getExpenseItems() {
        this.restService.getExpenseEntries().subscribe(data => this.expenseEntries = data);
    }
}
