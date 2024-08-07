import { inject, Injectable } from '@angular/core';
import { config } from '../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IAbout } from '../interfaces/About';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private http = inject(HttpClient)
  private baseUrl:string = config.api_url

  constructor() { }


  getAbout() {
    return this.http.get<any>(`${this.baseUrl}/about`);
  }
  updateAbout(data : IAbout) {
    return this.http.put<any>(`${this.baseUrl}/about`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
