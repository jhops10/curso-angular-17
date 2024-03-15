import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserResponse } from '../interfaces/User-response.interface';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private readonly _http: HttpClient) {}

  getUserById(userId: number): Observable<IUserResponse> {
    return this._http.get<IUserResponse>(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }
}
