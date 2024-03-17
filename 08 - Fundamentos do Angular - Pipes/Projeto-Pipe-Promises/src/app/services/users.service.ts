import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly _http: HttpClient) {}

  getUser() {
    return new Promise<IUser>((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'sincere@april.biz',
          }),
        3000
      );
    });
  }

  getUserById(userId: number): Observable<IUser> {
    return this._http.get<IUser>(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }
}
