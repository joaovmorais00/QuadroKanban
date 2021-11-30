import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private baseUrl = 'http://localhost:5000/';
  constructor(private http: HttpClient) {}

  login(user: User) {
    let token = this.http.post<string>(`${this.baseUrl}login`, { ...user });
    console.log(token, 'Token chegou');
  }
}
