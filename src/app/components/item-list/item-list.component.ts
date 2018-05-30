import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
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
