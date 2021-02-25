import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Guards*/ 
import {ContactGuard} from "../app/guards/contact.guard";

/*Components */
import {HomePageComponent} from '../app/components/home-page/home-page.component';
import {LoginComponent} from '../app/components/login/login.component';
import {AboutusPageComponent} from '../app/components/aboutus-page/aboutus-page.component';
import {CountriesComponent} from '../app/components/countries/countries.component';
import {CovidstatsComponent} from '../app/components/covidstats/covidstats.component';
import {PageNotFoundComponentComponent} from "../app/components/page-not-found-component/page-not-found-component.component";
import {FormvalidatorComponent} from "../app/components/formvalidator/formvalidator.component";
import {ProductsComponent} from '../app/components/products/products.component';
import {EditProductComponent} from '../app/components/edit-product/edit-product.component';
import {DetailsProductComponent} from '../app/components/details-product/details-product.component';
import { MessageComponent } from './components/message/message.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

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
  },
  {
    path:'contact',
    component:FormvalidatorComponent,
    canDeactivate: [ContactGuard]
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'editProduct',
    component:EditProductComponent
  },
  {
    path:'detailProduct/:id',
    component:DetailsProductComponent
  },
  {
    path:'messages',
    component:MessageComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'**',
    component:PageNotFoundComponentComponent
  }
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
