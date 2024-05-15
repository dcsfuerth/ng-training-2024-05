import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CalculatorComponent } from './calculator/calculator.component';
import { RatingComponent } from './rating/rating.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CalculatorComponent, RatingComponent, WelcomeComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
