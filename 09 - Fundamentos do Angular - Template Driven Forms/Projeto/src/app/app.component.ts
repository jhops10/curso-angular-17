import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  nome: string = 'João';

  onChange(text: string) {
    console.log(text);

    this.nome = text;
  }

  show() {
    console.log(this.nome);
  }
}
