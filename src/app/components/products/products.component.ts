import { Component, HostBinding, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductsService } from 'src/app/services/products.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import Swal from 'sweetalert2'

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

  constructor(private router:Router, private productsService:ProductsService, private spinner:SpinnerService) { }

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
  async deleteItem(item: Product):Promise<void>{
    this.spinner.getSpinner();
    try {
      await this.productsService.deleteProduct(item.id).then(()=>{
        this.products$ = this.productsService.products;
        this.spinner.stopSpinner();
      });
    } catch (error) {
      Swal.fire('Ocurrio un error', `<strong>
      Ocurrio un error al intentar eliminar el producto <br>
      por favor, intentelo de nuevo.
      </strong>`, 'error');
    }
  }
  editItem(item: Product):void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['editProduct'], this.navigationExtras);
  }

}
