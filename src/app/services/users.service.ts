import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = "https://peticiones.online/api/users "

  private arrayUsers: User[] = [];

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl)
  }
}
