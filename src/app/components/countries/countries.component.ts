import { Component, OnInit } from '@angular/core';
import { CountriesServiceService } from 'src/app/services/countries-service.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries:any = [];
  public filterName = '';
  constructor(private countriesService:CountriesServiceService, private spinnerService:SpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.getSpinner();
    this.countriesService.getCountries().subscribe(
      res =>{
        this.countries = res;
      },
      err =>{
        console.log(err);
      }
    );
  }

}
