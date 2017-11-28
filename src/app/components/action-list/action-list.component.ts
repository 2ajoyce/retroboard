import { Component, Input, OnInit } from '@angular/core';
import { Action } from '../../models/action';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.scss']
})
export class ActionListComponent implements OnInit {
  @Input() list: Action[];

  constructor() {
  }

  ngOnInit() {
  }

}
