import { inject, Injectable } from '@angular/core';
import { config } from '../config/config';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private http = inject(HttpClient);
  private baseUrl: string = config.api_url;
  
  constructor() { }

  createProject(formData: FormData) {
    return this.http.post<any>(`${this.baseUrl}/projects`, formData);
  }
}
