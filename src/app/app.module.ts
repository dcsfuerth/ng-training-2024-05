import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './shared/calculator/calculator.component';
import { Test234Component } from './shared/test234/test234.component';
import { BookFilterPipe } from './books/book-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CalculatorComponent,
    Test234Component,
    BookFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
