import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-roxo-button',
  templateUrl: './card-roxo-button.component.html',
  styleUrls: ['./card-roxo-button.component.scss'],
})
export class CardRoxoButtonComponent {
  dataEmmit: string = 'Valor Emitido Pelo Componente Filho';

  @Output('buttonClickEmitter') buttonClickEmitter = new EventEmitter<string>();

  onButtonClick() {
    console.log('onButtonClick');
    this.buttonClickEmitter.emit(this.dataEmmit);
  }
}
