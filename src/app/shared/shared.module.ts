import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CalculatorComponent } from './calculator/calculator.component';
import { RatingComponent } from './rating/rating.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [CalculatorComponent, RatingComponent, WelcomeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
