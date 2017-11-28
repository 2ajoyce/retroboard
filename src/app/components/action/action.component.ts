import { Component, Input, OnInit } from '@angular/core';
import { Action } from '../../models/action';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  @Input() action: Action;

  constructor() {
  }

  ngOnInit() {
  }

}
