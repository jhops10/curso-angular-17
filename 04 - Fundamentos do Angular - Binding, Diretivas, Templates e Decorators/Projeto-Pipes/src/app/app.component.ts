import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  pessoa = {
    name: 'João',
    status: 1,
  };

  pessoa2 = {
    name: 'Matheus',
    status: 2,
  };

  pessoa3 = {
    name: 'Bella',
    status: 3,
  };
}
