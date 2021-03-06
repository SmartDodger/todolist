import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxMaskModule } from 'ngx-mask';
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgxMaskModule.forRoot(),
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
