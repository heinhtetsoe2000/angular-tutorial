import { Component, Input, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {observable, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-auto-complete-material',
  templateUrl: './auto-complete-material.component.html',
  styleUrls: ['./auto-complete-material.component.scss']
})
export class AutoCompleteMaterialComponent implements OnInit {

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
