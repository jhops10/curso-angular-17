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

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnInit, OnChanges {
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
    console.log(' <- NgOnChange -> ');
    console.log(this.genresList);
    console.log(this.stateList);
    console.log(this.userSelected);
  }
}
