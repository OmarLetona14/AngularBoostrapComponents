import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

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
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { FormvalidatorComponent } from './components/formvalidator/formvalidator.component';  
import { RouterModule } from '@angular/router';
import { AngularFirestore} from "@angular/fire/firestore";
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { ProductsComponent } from './components/products/products.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';

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
    CovidstatsComponent,
    PageNotFoundComponentComponent,
    FormvalidatorComponent,
    ProductsComponent,
    EditProductComponent,
    DetailsProductComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    SpinnerService,
    {provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true},
    CountriesServiceService,
    CovidService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
