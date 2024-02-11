import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  fontSize: number = 15;
  textColor: 'white' | 'orange' = 'white';
  textButton: 'Branco' | 'Laranja' = 'Laranja';

  increaseFontSize() {
    this.fontSize += 5;
  }

  toggleFontColor() {
    if (this.textColor === 'white') {
      this.textColor = 'orange';
      this.textButton = 'Branco';
    } else {
      this.textColor = 'white';
      this.textButton = 'Laranja';
    }
  }
}
