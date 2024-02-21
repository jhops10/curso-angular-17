import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('minhaDiv') divEl!: ElementRef<HTMLDivElement>;

  constructor(private _elRef: ElementRef) {}

  ngOnInit(): void {
    console.log(this._elRef);
    const divEl = this._elRef.nativeElement.querySelector(
      '#minha-outra-div'
    ) as HTMLDivElement;
    console.log(divEl);
  }

  ngAfterViewInit(): void {
    this.divEl.nativeElement.style.backgroundColor = 'orange';
    this.divEl.nativeElement.textContent = 'Sou uma div!';
    this.divEl.nativeElement.classList.add('minha-classe');
  }
}
