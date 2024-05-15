import { Component } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  x = '';
  y = '';
  result = 0;

  getX() {
    return parseInt(this.x) || 0;
  }

  getY() {
    return parseInt(this.y) || 0;
  }

  add() {
    this.result = this.getX() + this.getY();
  }

  subtract() {
    this.result = this.getX() - this.getY();
  }

  clear() {
    this.x = '';
    this.y = '';
    this.result = 0;
  }
}
