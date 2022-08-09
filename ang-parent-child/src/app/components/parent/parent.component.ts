import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  heroes = ['Ikaris', 'Thena', 'Sersi', 'Gilgamesh', 'Star Fox', 'Black Knight', 'Ajak', 'Druig', 'Kingo', 'Sprite', 'Makkari'];

  

  constructor() { }

  ngOnInit(): void {
  }

}
