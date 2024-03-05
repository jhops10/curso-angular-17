import { Pipe, PipeTransform } from '@angular/core';
import { UserStatusEnum } from '../app.component';

@Pipe({
  name: 'userStatus',
})
export class UserStatusPipe implements PipeTransform {
  transform(value: number): string {
    if (value === UserStatusEnum.ATIVO) {
      return 'Ativo';
    } else if (value === UserStatusEnum.INATIVO) {
      return 'Inativo';
    }
    return 'Inválido';
  }
}
