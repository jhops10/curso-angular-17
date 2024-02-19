import { Component, ElementRef, ViewChild } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  //Exemplo 1 (Aula 01)
  // @ViewChild('meuInput') meuInputEl!: ElementRef<HTMLInputElement>;
  // @ViewChild('minhaDiv') minhaDivEl!: ElementRef<HTMLDivElement>;
  // updateInputText() {
  //   this.meuInputEl.nativeElement.value = 'Texto Atualizado!';
  //   console.log(this.meuInputEl);
  // }
  // focus() {
  //   this.meuInputEl.nativeElement.focus();
  // }
  // changeContent() {
  //   this.minhaDivEl.nativeElement.textContent = 'Olá, Mundo';
  // }
  // Exemplo 2 (Aula 02)
  // @ViewChild('filhoComp') filhoCompRef!: FilhoComponent;
  // hello() {
  //   this.filhoCompRef.dizerOi();
  //   this.filhoCompRef.message = 'Eu disse Olá!';
  // }
}
