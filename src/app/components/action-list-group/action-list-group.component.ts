import { Component, Input, OnInit } from '@angular/core';
import { Action } from '../../models/action';
import {MatInputModule} from '@angular/material';

@Component({
  selector: 'app-action-list-group',
  templateUrl: './action-list-group.component.html',
  styleUrls: ['./action-list-group.component.scss']
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
