import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardMediumIcon]',
  host: { class: 'card-container__medium-icon' },
})
export class CardMediumIconDirective {}
