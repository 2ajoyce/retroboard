import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-item-list-group',
  templateUrl: './item-list-group.component.html',
  styleUrls: ['./item-list-group.component.scss']
})
export class ItemListGroupComponent implements OnInit {
  @Input() green: Item[];
  @Input() yellow: Item[];
  @Input() red: Item[];

  constructor() {
  }

  ngOnInit() {
  }

}
