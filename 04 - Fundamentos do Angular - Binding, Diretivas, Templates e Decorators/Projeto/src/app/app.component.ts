import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // inputText: string = 'Texto Inicial Alterado';
  // inputType: string = 'text';
  // isDisabled: boolean = true;

  // enableInput() {
  //   this.isDisabled = false;
  // }

  // disableInput() {
  //   this.isDisabled = true;
  // }

  // changeTypeToText() {
  //   this.inputType = 'text';
  // }

  // changeTypeToPassword() {
  //   this.inputType = 'password';
  // }

  // logInputText() {
  //   console.log(this.inputText);
  // }

  // handleInputKeyUp(event: KeyboardEvent) {
  //   const currentText = (event.target as HTMLInputElement).value;
  //   console.log(currentText);
  // }

  buttonTitle: string = 'Título do Botão';
  buttonDisable: boolean = false;

  onButtonClick() {
    this.buttonTitle = 'Titulo Alteradoooo';
    this.buttonDisable = !this.buttonDisable;
  }
}
