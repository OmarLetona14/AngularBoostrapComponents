import { Component, HostBinding, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @HostBinding('class') classes = 'row'
  products$ = this.productsService.products;
  currentDenomination:string = 'Q'
  filterProduct:string;
  navigationExtras: NavigationExtras = {
    state: {
      value:null
    }
  };

  constructor(private router:Router, private productsService:ProductsService) { }

  ngOnInit(): void {
  }

  getDescription(d:string):string{
    if (d.length >= 150){
      let desc = d.substring(0, 150) + '...';
      return desc;
    }else{
      return d;
    }
  } 

  details(item: Product):void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['detailProduct'], this.navigationExtras);
  }
  deleteItem(item: Product):void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['deleteProduct'], this.navigationExtras);
  }
  editItem(item: Product):void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['editProduct'], this.navigationExtras);
  }

}
