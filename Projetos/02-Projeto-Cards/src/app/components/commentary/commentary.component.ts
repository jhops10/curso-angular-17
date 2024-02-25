import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrl: './commentary.component.scss',
})
export class CommentaryComponent {
  @Input({ required: true }) commentary: string = '';
}
