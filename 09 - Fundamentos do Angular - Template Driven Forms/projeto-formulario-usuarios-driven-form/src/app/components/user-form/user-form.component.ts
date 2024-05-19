import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  getNgModuleById,
} from '@angular/core';
import { GenreListResponse } from '../../types/genre-list-response';
import { StateListResponse } from '../../types/state-list-response';
import { IUser } from '../../interfaces/user/user.interface';
import { getPasswordStrengthValue } from '../../utils/get-password-strength-value';
import { convertPtBrDateToDateObj } from '../../utils/convert-pt-br-to-date-obj';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { convertDateObjToPtBrDate } from '../../utils/convert-date-obj-to-pt-br-date';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnInit, OnChanges {
  passwordStrengthValue = 0;
  dateValue: Date | null = null;
  minDate: Date | null = null;
  maxDate: Date | null = null;
  displayColumns: string[] = ['title', 'band', 'genre', 'favorite'];
  filteredGenresList: GenreListResponse = [];

  @Input() genresList: GenreListResponse = [];
  @Input() stateList: StateListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  constructor() {}

  ngOnInit(): void {
    this.setMinAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const USER_CHANGED = changes['userSelected'];
    if (USER_CHANGED) {
      this.onPasswordChange(this.userSelected.password);
      this.setBirthDateToDatepicker(this.userSelected.birthDate);
      this.filteredGenresList = this.genresList;
    }
  }

  onPasswordChange(password: string) {
    this.passwordStrengthValue = getPasswordStrengthValue(password);
  }

  onDateChange(event: MatDatepickerInputEvent<any, any>) {
    if (!event.value) {
      return;
    }
    this.userSelected.birthDate = convertDateObjToPtBrDate(event.value);
    console.log(event);
  }

  displayFn(genreId: number) {
    const genreFound = this.genresList.find((genre) => genre.id === genreId);

    return genreFound ? genreFound.description : '';
  }

  filterGenres(text: string) {
    if (typeof text === 'number') {
      return;
    }
    const searchTerm = text.toLowerCase();
    this.filteredGenresList = this.genresList.filter((genre) =>
      genre.description.toLowerCase().includes(searchTerm)
    );
  }

  private setMinAndMaxDate() {
    this.minDate = new Date(new Date().getFullYear() - 100, 0, 1);
    this.maxDate = new Date();
  }

  private setBirthDateToDatepicker(birthDate: string) {
    this.dateValue = convertPtBrDateToDateObj(birthDate);
  }
}
