import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location  } from '../../domain/location/interface/location';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  BASE_URL = environment.apiUrl;
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.BASE_URL}/locations`);
  }
}
