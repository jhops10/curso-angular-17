import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { GenreListResponse } from '../../types/genre-list-response';
import { StateListResponse } from '../../types/state-list-response';
import { IUser } from '../../interfaces/user/user.interface';
import { getPasswordStrengthValue } from '../../utils/get-password-strength-value';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnInit, OnChanges {
  passwordStrengthValue = 0;

  @Input() genresList: GenreListResponse = [];
  @Input() stateList: StateListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  constructor() {}

  ngOnInit(): void {
    // console.log(' <- NgOnInit -> ');
    // console.log(this.genresList);
    // console.log(this.stateList);
    // console.log(this.userSelected);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const USER_CHANGED = changes['userSelected'];
    if (USER_CHANGED) {
      this.onPasswordChange(this.userSelected.password);
    }
  }

  onPasswordChange(password: string) {
    this.passwordStrengthValue = getPasswordStrengthValue(password);
  }
}
