import { inject, Injectable } from '@angular/core';
import { config } from '../config/config';
import { HttpClient } from '@angular/common/http';

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
}
