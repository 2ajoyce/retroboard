import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { ActionListComponent } from './components/action-list/action-list.component';
import { ActionComponent } from './components/action/action.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemListGroupComponent } from './components/item-list-group/item-list-group.component';
import { ActionListGroupComponent } from './components/action-list-group/action-list-group.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ActionListComponent,
    ActionComponent,
    HeaderComponent,
    ItemListComponent,
    ItemListGroupComponent,
    ActionListGroupComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
