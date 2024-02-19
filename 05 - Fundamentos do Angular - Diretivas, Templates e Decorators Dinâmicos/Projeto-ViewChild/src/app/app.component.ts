import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
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
  // Exemplo 3 (Aula 03)

  @ViewChild('meuInput')
  meuInputEl!: ElementRef<HTMLInputElement>;

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log('Template Carregado');
    this.meuInputEl.nativeElement.focus();
  }
}
