import { Component } from '@angular/core';

@Component({
  selector: 'app-card-roxo',
  templateUrl: './card-roxo.component.html',
  styleUrls: ['./card-roxo.component.scss'],
})
export class CardRoxoComponent {
  clicked(eventEmitted: string) {
    console.log('Componente Pai', eventEmitted);
  }
}
