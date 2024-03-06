import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  minhaData: string = '2023-10-21T21:00:00.000Z';
  minhaDataObj: Date = new Date('2023-10-21T21:00:00.000Z');

  ngOnInit(): void {
    console.log('Data Convertida para Região', new Date(this.minhaData));
    console.log('Data UTC-0', new Date(this.minhaData).toUTCString());
    console.log('Timestemp', new Date(this.minhaData).getTime());
    console.log('', this.minhaDataObj);
  }
}
