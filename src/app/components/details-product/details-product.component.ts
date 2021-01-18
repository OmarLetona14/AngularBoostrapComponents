import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  itemValue:Product = null;
  constructor(private router:Router) {
    const navigation = this.router.getCurrentNavigation();
    this.itemValue = navigation?.extras?.state?.value;
   }

  ngOnInit(): void {
    if(typeof this.itemValue == ('undefined' || null)){
      this.router.navigate(['products']);
    }
  }

}
