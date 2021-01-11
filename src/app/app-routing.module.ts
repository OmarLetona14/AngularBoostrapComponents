import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from '../app/components/home-page/home-page.component';
import {LoginComponent} from '../app/components/login/login.component';
import {AboutusPageComponent} from '../app/components/aboutus-page/aboutus-page.component';
import {CountriesComponent} from '../app/components/countries/countries.component';
import {CovidstatsComponent} from '../app/components/covidstats/covidstats.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/covidStats',
    pathMatch: 'full'
  },
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'about',
    component:AboutusPageComponent
  },
  {
    path:'countries',
    component:CountriesComponent
  },
  {
    path:'covidStats',
    component:CovidstatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
