import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-covidstats',
  templateUrl: './covidstats.component.html',
  styleUrls: ['./covidstats.component.css']
})
export class CovidstatsComponent implements OnInit {

  filterName = '';
  countries:any = [];
  constructor(private covidService:CovidService) { }

  ngOnInit(): void {
    this.covidService.getCovidStats().subscribe(
      res =>{
        let response:any = [];
        response = res;
        this.countries = response.data;
      },
      err =>{
        console.log(err);
      }
    );
  }

}
