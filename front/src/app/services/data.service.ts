import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'http://localhost:5000/';
  private baseCards = this.baseUrl + 'cards';
  constructor(private http: HttpClient) {}

  setToken() {
    return new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );
  }

  login(user: User) {
    return this.http.post<string>(`${this.baseUrl}login`, { ...user });
  }

  getTasks() {
    const headers = this.setToken();
    return this.http.get<Task[]>(this.baseCards, { headers: headers });
  }

  createTask(login: string, senha: string, lista: string) {
    const headers = this.setToken();
    return this.http.post<Task>(
      this.baseCards,
      { login: login, senha: senha, lista: lista },
      {
        headers: headers,
      }
    );
  }
}
