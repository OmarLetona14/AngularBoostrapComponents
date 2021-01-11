import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Models  
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutusPageComponent } from './components/aboutus-page/aboutus-page.component';
import { LoginComponent } from './components/login/login.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CountriesComponent } from './components/countries/countries.component';

// Services
import {CountriesServiceService} from './services/countries-service.service';    
import {InterceptorService} from './services/interceptor.service';
import {SpinnerService} from './services/spinner.service';
import {CovidService} from './services/covid.service';

import { CountryNamePipe } from './pipes/country-name.pipe';
import { SocialbuttonsComponent } from './components/socialbuttons/socialbuttons.component';
import { CovidstatsComponent } from './components/covidstats/covidstats.component';  

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    NavigationComponent,
    FooterPageComponent,
    HomePageComponent,
    AboutusPageComponent,
    LoginComponent,
    CountriesComponent,
    CountryNamePipe,
    SocialbuttonsComponent,
    CovidstatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [
    SpinnerService,
    {provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true},
    CountriesServiceService,
    CovidService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
