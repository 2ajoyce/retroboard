import {Component, Input} from '@angular/core';
import {Item} from '../../models/item';

@Component({
  selector: 'app-item',
  styleUrls: ['./item.component.scss'],
  template: `
    <div>
      <div class="favorite-area">
        <i class="heart material-icons" (click)="favorite()">favorite</i>
        <div *ngIf="favoriteCount > 0" class="favorite-count">{{favoriteCount}}</div>
      </div>
      <p *ngIf="!isEditing" class="mat-body-1">{{ item.description }}</p>
      <input *ngIf="isEditing" type="text" [(ngModel)]="item.description" autofocus>
      <i class="edit material-icons" (click)="toggleEditing()">edit</i>
    </div>
  `
})
export class ItemComponent {
  @Input() item: Item;
  favoriteCount = 0;
  isEditing = false;

  favorite(): void {
    ++this.favoriteCount;
  }

  toggleEditing() {
    this.isEditing = !this.isEditing;
  }
}
