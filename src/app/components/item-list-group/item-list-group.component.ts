import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../models/item';

@Component({
  selector: 'app-item-list-group',
  styleUrls: ['./item-list-group.component.scss'],
  template: `
    <app-item-list class="green"
                   [list]="green"
                   [placeholder]="'I\\'m glad that...'"
                   [imageSrc]="'../../../assets/images/smiley.svg'"
    ></app-item-list>
    <app-item-list class="yellow"
                   [list]="yellow"
                   [placeholder]="'I\\'m wondering about...'"
                   [imageSrc]="'../../../assets/images/middle.svg'"
    ></app-item-list>
    <app-item-list class="red"
                   [list]="red"
                   [placeholder]="'It wasn\\'t so great that...'"
                   [imageSrc]="'../../../assets/images/sad.svg'"
    ></app-item-list>
  `
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
