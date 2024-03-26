import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  // Aula 01
  // nome: string = 'João';
  // onChange(text: string) {
  //   console.log(text);
  //   this.nome = text;
  // }
  // show() {
  //   console.log(this.nome);
  // }

  // Aula 02
  @ViewChild('meuInputFormControl') inputElFormControl!: NgModel;
  @ViewChild('meuInput') inputEl!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    console.log('Form Control: ', this.inputElFormControl);
    console.log('Original:', this.inputEl);
  }

  send() {
    if (this.inputElFormControl.valid && this.inputElFormControl.touched) {
      console.log('Enviado com sucesso!');
    }
  }
}
