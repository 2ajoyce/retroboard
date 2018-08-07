import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  template: `
    <div class="header-root">
      <h1 id="title">{{title}}</h1>
      <div id="buttons">
        <button>Menu</button>
      </div>
    </div>
  `
})
export class HeaderComponent {
  title = 'Retro';

  constructor() {
  }
}
