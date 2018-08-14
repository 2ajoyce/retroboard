import {Component, Input} from '@angular/core';
import {Action} from '../../models/action';

@Component({
  selector: 'app-action-list',
  styleUrls: ['./action-list.component.scss'],
  template: `
    <app-action *ngFor="let action of list" [action]="action"></app-action>
  `
})
export class ActionListComponent {
  @Input() list: Action[];
}
