import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrl: './credit-card-details.component.scss',
})
export class CreditCardDetailsComponent {
  @Input({ required: true }) cardNumber: string = '';
  @Input({ required: true }) clientName: string = '';
  @Input({ required: true }) card: string = '';
}
