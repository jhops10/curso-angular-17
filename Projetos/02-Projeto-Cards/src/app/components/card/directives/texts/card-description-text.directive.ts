import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardDescriptionText]',
  host: { class: 'card-container__description-text' },
})
export class CardDescriptionTextDirective {}
