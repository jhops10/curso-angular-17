import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardLargeIcon]',
  host: { class: 'card-container__large-icon' },
})
export class CardLargeIconDirective {}
