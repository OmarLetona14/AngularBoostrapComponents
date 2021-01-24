import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Spinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { element } from 'protractor';
import { Product } from 'src/app/model/Product';
import { CurrencyService } from 'src/app/services/currency.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductsService } from 'src/app/services/products.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  basePrice:string = ''
  country:string = '';
  currency:string = '';
  countries:any = new Array();
  countries_JSON:any = [];
  noImageURL = 'data:image/png;base64,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'
  itemValue:Product = {};
  constructor(private router:Router, private productService:ProductsService, private activedRoute:ActivatedRoute,
    private spinner:SpinnerService, private currencyService:CurrencyService) {
    const navigation = this.router.getCurrentNavigation();
    this.itemValue = navigation?.extras?.state?.value;
    const params = this.activedRoute.snapshot.params;
    if(this.itemValue == (null || undefined)){
     this.getOneProduct(params.id);
    }
   }

  ngOnInit(): void {
    this.basePrice = this.itemValue.price;
    this.getAllCountries();
  }

  getOneProduct(id:string){
    this.spinner.getSpinner();
    this.productService.getProducts().then(snapshot => {
      snapshot.forEach(doc => {
        if(doc.data().id == id){
          this.itemValue = {
            id: doc.data().id,
            name:doc.data().name,
            description:doc.data().description,
            price:doc.data().price,
            image_url: doc.data().image_url
          }  
        }
      });
      this.spinner.stopSpinner();
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  }

  getAllCountries(){
    this.currencyService.getCountries().subscribe(
      res =>{
        this.countries_JSON = res;
        for (var c in this.countries_JSON.results){
          if(this.countries_JSON.results.hasOwnProperty(c)){
            this.countries.push(this. countries_JSON.results[c]);
          }
        }
      },
      err =>{
        console.error(err);
      }
    );
  }

  calcCurrencyId(){
    this.countries.forEach(element => {
      if(this.country == (element.name)){
        this.currency = element.currencyId;
      }
    });
  }

  calcPrice(){
    this.calcCurrencyId();
    let conv = `USD_${this.currency}`
    let price_currency = 0
    this.currencyService.getConvertion(conv).subscribe(
      res=>{price_currency = res[conv]
      console.log(res)
      let total = price_currency*parseFloat(this.basePrice);
      this.itemValue.price = Math.round(total) + '';},
      err=>{console.error(err)}
    );
  }

}
