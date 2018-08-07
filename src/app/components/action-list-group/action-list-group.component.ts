import {Component, Input, OnInit} from '@angular/core';
import {Action} from '../../models/action';

@Component({
  selector: 'app-action-list-group',
  styleUrls: ['./action-list-group.component.scss'],
  template: `
    <h4>Action Items</h4>
    <form class="action-form">
      <input placeholder="Add an action item">
    </form>
    <div id="action-lists">
      <app-action-list id="current" [list]="current"></app-action-list>
      <app-action-list id="old" [list]="old"></app-action-list>
      <app-action-list id="older" [list]="older"></app-action-list>
    </div>

  `,
})

export class ActionListGroupComponent implements OnInit {
  @Input() current: Action[];
  @Input() old: Action[];
  @Input() older: Action[];

  constructor() {
  }

  ngOnInit() {
  }

}
