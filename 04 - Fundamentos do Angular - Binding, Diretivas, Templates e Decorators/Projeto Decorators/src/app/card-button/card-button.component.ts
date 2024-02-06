import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss'],
})
export class CardButtonComponent {
  @Output('buttonClickEmitter') buttonClickEmitter =
    new EventEmitter<boolean>();

  onButtonClick() {
    console.log('onButtonClick');
    this.buttonClickEmitter.emit(true);
  }
}
