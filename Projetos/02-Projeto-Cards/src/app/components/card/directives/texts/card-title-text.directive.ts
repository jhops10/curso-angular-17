import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardTitleText]',
  host: { class: 'card-container__title-text' },
})
export class CardTitleTextDirective {
  constructor() {}
}
