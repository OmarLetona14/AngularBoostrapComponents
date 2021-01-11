import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  baseUrl = environment.baseCovidUrl;
  constructor(private http:HttpClient) { }

  getCovidStats(){
    return this.http.get(`${this.baseUrl}/countries`);
  }
}
