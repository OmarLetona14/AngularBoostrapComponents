import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  baseUrl = environment.baseCurrencyUrl;
  constructor(private http:HttpClient) { }

  getCurrencies(){
    return this.http.get(`convert?q=USD_GTQ&compact=ultra&apiKey=369456db7ca1ffb1d5de`);
  }

  getCountries(){
    return this.http.get(`${this.baseUrl}countries?apiKey=369456db7ca1ffb1d5de`);
  }
    
  getConvertion(convertionString:string){
    const requestUrl = `${this.baseUrl}convert?q=${convertionString}&compact=ultra&apiKey=369456db7ca1ffb1d5de`;
    console.log(requestUrl);
    return this.http.get(requestUrl);
  }
}
