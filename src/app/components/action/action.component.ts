import {Component, Input} from '@angular/core';
import {Action} from '../../models/action';

@Component({
  selector: 'app-action',
  template: `
    <div>
      <p class="mat-body-1">
        {{action?.description}}
      </p>
    </div>
  `,
  styleUrls: ['./action.component.scss']
})
export class ActionComponent {
  @Input() action: Action;
}
