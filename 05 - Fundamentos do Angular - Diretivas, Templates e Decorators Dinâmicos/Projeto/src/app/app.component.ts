import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // Exemplo 4
  clicou(input: HTMLInputElement) {
    console.log(input.value);
  }
}
