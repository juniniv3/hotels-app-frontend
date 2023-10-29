import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../../domain/service/interface/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  BASE_URL = environment.apiUrl;
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.BASE_URL}/services`);
  }
}
