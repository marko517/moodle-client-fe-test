import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from './user-model';
import { UserWrapperModel } from './users-wrapper-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers():Observable<UserWrapperModel> {
    return this.httpClient.get<UserWrapperModel>('http://localhost:8080/api/users');
  }

  getUser(id: number): Observable<UserWrapperModel> {
    return this.httpClient.get<UserWrapperModel>('http://localhost:8080/api/users/' + id);
  }
}
