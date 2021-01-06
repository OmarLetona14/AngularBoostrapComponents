import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesServiceService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getCountries(){
    return this.http.get(`${this.baseUrl}/all`);
  }

  
}
