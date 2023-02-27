import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, lastValueFrom, Observable, throwError } from 'rxjs';
import { USERS } from '../db/users.db';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = 'https://peticiones.online/api/users';


  constructor(private httpClient: HttpClient) { }


  getAllUser(pPage: number = 1): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}?page=${pPage}`));

  }

  getUserById(pId: number): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}/${pId}`));
  }

  createUSer(pUser: User): Promise<User> {
    return lastValueFrom(this.httpClient.post<User>(this.baseUrl, pUser));
  }

  updateUser(pUser: User): Promise<any> {
    return lastValueFrom(this.httpClient.put<any>(`${this.baseUrl}/${pUser.id}`, pUser));
  }

  deleteUser(pId: number): Promise<{}> {
    return lastValueFrom(this.httpClient.delete<any>(`${this.baseUrl}/${pId}`));
  }
}
