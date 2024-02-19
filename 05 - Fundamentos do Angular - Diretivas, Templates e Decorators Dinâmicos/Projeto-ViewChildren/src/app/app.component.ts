import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  buttonsList = ['Botão 1', 'Botão 2', 'Botão 3'];

  @ViewChildren('meuButton') buttonsEl!: QueryList<
    ElementRef<HTMLButtonElement>
  >;

  ngAfterViewInit(): void {
    console.log(this.buttonsEl);
    this.buttonsEl.changes.subscribe((result) => {
      console.log(result);
    });
  }

  changeColor(event: Event) {
    console.log(event);
    const btnElement = event.target as HTMLButtonElement;
    btnElement.style.backgroundColor = 'Orange';
    btnElement.style.color = 'white';
  }

  resetButtons() {
    this.buttonsEl.forEach((buttonEl) => {
      buttonEl.nativeElement.style.backgroundColor = '';
      buttonEl.nativeElement.style.color = 'black';
    });
  }

  first() {
    // const primeiro = this.buttonsEl.get(0);
    // const primeiro = this.buttonsEl.find(
    //   (buttonEl) => buttonEl.nativeElement.className === 'btn-0'
    // );

    const primeiro = this.buttonsEl.toArray()[0];
    console.log(primeiro);
  }

  remove() {
    this.buttonsList.shift();
  }
}
