import { Component} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-paginator-material',
  templateUrl: './paginator-material.component.html',
  styleUrls: ['./paginator-material.component.scss']
})
export class PaginatorMaterialComponent {

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pageEvent: PageEvent | undefined;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

}
