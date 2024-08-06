import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient)
  private baseUrl:string = config.api_url
  constructor() { }

  signIn(email: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/auth/signin`, { email, password }, {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }
  )});
  }
}
