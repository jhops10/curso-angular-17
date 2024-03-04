import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card02',
  templateUrl: './card02.component.html',
  styleUrl: './card02.component.scss',
})
export class Card02Component {
  @Input({ required: true }) header!: TemplateRef<any>;
  @Input({ required: true }) content!: TemplateRef<any>;
  @Input({ required: true }) footer!: TemplateRef<any>;
}
