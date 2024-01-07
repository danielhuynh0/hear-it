import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateUserService {
  private baseUrl = 'http://127.0.0.1:8000/api/';
  constructor(private http: HttpClient) {}

  createUser(user: Object): Observable<Object> {
    // var csrftoken = '';
    // const csrfTokenCookie = document.cookie
    //   .split('; ')
    //   .find((row) => row.startsWith('csrftoken'));
    // if (csrfTokenCookie === undefined) {
    //   throw Error('CSRF token cookie not found');
    // } else {
    //   csrftoken = csrfTokenCookie.split('=')[1];
    // }

    // const headers = new HttpHeaders({ 'X-CSRFToken': csrftoken });
    // return this.http.post(`${this.baseUrl}` + `create-user`, user, { headers });
    return this.http.post(`${this.baseUrl}` + `create-user`, user);
  }
}
