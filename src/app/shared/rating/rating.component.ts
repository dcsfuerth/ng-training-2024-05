import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
})
export class RatingComponent {
  @Input()
  id: string = '';

  @Input()
  rating: number = 0;

  @Output()
  plusClicked: EventEmitter<string> = new EventEmitter<string>();

  clickPlus() {
    this.plusClicked.emit(this.id);
  }
  clickMinus() {
    //
  }
}
