import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = 'https://peticiones.online/api/users/';

  constructor(private httpClient: HttpClient) { }


  getAllUser(pPage: number = 1): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}?page=${pPage}`));
  }

  getUserById(pId: string): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}${pId}`));
  }

  createUSer(pUser: User): Promise<User> {
    return lastValueFrom(this.httpClient.post<User>(this.baseUrl, pUser));
  }

  updateUser(pUser: User): Promise<User> {
    return lastValueFrom(this.httpClient.put<User>(`${this.baseUrl}${pUser._id}`, pUser));
  }

  deleteUser(pId: string): Promise<any> {
    return lastValueFrom(this.httpClient.delete<any>(`${this.baseUrl}${pId}`));
  }
}
