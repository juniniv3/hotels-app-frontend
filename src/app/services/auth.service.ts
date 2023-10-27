import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Login } from '../domain/auth/dto/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = environment.apiUrl;
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  logIn(email: string | any, password: string | any): Observable<Login> {
    return this.http.post<Login>(`${this.BASE_URL}/auth/login`, {email , password});
  }
}
