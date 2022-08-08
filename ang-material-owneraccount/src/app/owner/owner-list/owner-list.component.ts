import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { MatTableDataSource } from '@angular/material/table';
import { MovieList } from 'src/app/interfaces/movie-list';
import { ExpenseEntry } from 'src/app/interfaces/expense-entry';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, MAT_PAGINATOR_DEFAULT_OPTIONS } from '@angular/material/paginator';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  public displayedColumns = ['id', 'item', 'amount', 'category', 'location', 'spendOn', 'createdOn'];

  //public dataSource: ExpenseEntry[] = [];
  public dataSource = new MatTableDataSource<ExpenseEntry>();

  //sortedData: ExpenseEntry[];

  constructor(private repoService: RepositoryService) {
    //this.sortedData = this.dataSource.slice();
    //setTimeout(() => this.sortedData = this.dataSource.slice(), 500);
    this.sort;
    this.paginator;
  }

  ngOnInit(): void {
    this.getEntries();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (target: string | any) => {
    let value = target.value;
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };

  getEntries() {
    this.repoService.getExpenseEnteries().subscribe(data => this.dataSource.data = data as ExpenseEntry[]);
    console.log(this.dataSource);
    //setTimeout(() => console.log(this.dataSource, this.sortedData), 5000);
  }
}




