import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  cardOrange = {
    planType: 'Simples',
    planPrice: 100,
    cardStyle: 'orange',
  };

  cardPurple = {
    planType: 'Completo',
    planPrice: 200,
    cardStyle: 'purple',
  };

  onCardButtonClicked() {
    console.log('onCardButtonClicked');
  }
}
