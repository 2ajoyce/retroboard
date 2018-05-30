import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  favoriteCount = 0;
  isEditing = false;

  constructor() {
  }

  ngOnInit() {
  }

  favorite(): void {
    ++this.favoriteCount;
  }

  toggleEditing() {
    this.isEditing = !this.isEditing;
  }
}
