import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutusPageComponent } from './components/aboutus-page/aboutus-page.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    NavigationComponent,
    FooterPageComponent,
    HomePageComponent,
    AboutusPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
