import {Component} from '@angular/core';
import {Item} from './models/item';
import {Action} from './models/action';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-header></app-header>
    <app-item-list-group
      [green]="green"
      [yellow]="yellow"
      [red]="red"
    ></app-item-list-group>
    <app-action-list-group
      [current]="current"
      [old]="old"
      [older]="older"
    ></app-action-list-group>`
})
export class AppComponent {
  green: Item[] = [
    {description: 'The first green item'},
    {description: 'The second green item'},
    {description: 'The third green item'},
  ];
  yellow: Item[] = [
    {description: 'The first yellow item'},
    {description: 'The second yellow item'},
    {description: 'The third yellow item'},
  ];
  red: Item[] = [
    {description: 'The first red item'},
    {description: 'The second red item'},
    {description: 'The third red item'},
  ];

  current: Action[] = [
    {description: 'The first current action'},
    {description: 'The second current action'},
    {description: 'The third current action'},
  ];
  old: Action[] = [
    {description: 'The first old action'},
    {description: 'The second old action'},
    {description: 'The third old action'},
  ];
  older: Action[] = [
    {description: 'The first older action'},
    {description: 'The second older action'},
    {description: 'The third older action'},
  ];
}
