import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateUserService {
  private baseUrl = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) {}

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `create-user`, user);
  }
}
