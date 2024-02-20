import { Component } from '@angular/core';

@Component({
  selector: 'app-sem-diretiva',
  templateUrl: './sem-diretiva.component.html',
  styleUrl: './sem-diretiva.component.scss',
})
export class SemDiretivaComponent {
  // Exemplo 01 (Aula 01)
  addBgColor: boolean = false;
  onMouseOver() {
    this.addBgColor = true;
  }
  onMouseOut() {
    this.addBgColor = false;
  }
}
