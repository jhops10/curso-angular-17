import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cardPlanType = 'Simples';
  cardPlanPrice = 100;

  handlePlanType(planType: string) {
    this.cardPlanType = planType;
  }
}
