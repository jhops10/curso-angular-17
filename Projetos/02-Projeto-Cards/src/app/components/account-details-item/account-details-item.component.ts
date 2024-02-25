import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account-details-item',
  templateUrl: './account-details-item.component.html',
  styleUrl: './account-details-item.component.scss',
})
export class AccountDetailsItemComponent {
  @Input({ required: true }) text: string = '';
  @Input({ required: true }) value: string = '';
}
