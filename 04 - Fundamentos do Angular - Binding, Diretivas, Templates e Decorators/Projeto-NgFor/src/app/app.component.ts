import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  personSelectedIndex: number | undefined;

  listPeople = [
    {
      name: 'João Paulo',
      age: 33,
    },
    {
      name: 'Rogério',
      age: 25,
    },
    {
      name: 'Natália',
      age: 19,
    },
    {
      name: 'Bella',
      age: 28,
    },
  ];

  selectPerson(index: number) {
    this.personSelectedIndex = index;
  }
}
