import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
})
export class ItemListComponent {
  @Input({ required: true }) text: string = '';
  @Input({ required: true }) value: string = '';
}
