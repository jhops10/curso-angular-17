import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(value: number): string {
    console.log('Status pipe');

    const status: { [key: string]: string } = {
      1: 'Ativo',
      2: 'Inativo',
    };

    return status[value];
  }
}
