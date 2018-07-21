import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../models/item';

@Component({
  selector: 'app-item-list',
  styleUrls: ['./item-list.component.scss'],
  template: `
    <img [src]="imageSrc">
    <form class="action-form">
      <input placeholder="placeholder">
    </form>
    <app-item
      *ngFor="let item of list"
      [item]="item"
    ></app-item>
  `
})
export class ItemListComponent implements OnInit {
  @Input() list: Item[];
  @Input() placeholder: string;
  @Input() item: string;
  @Input() imageSrc: string;

  constructor() {
  }

  ngOnInit() {
  }
}
