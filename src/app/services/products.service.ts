import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Observable<Product[]>;
  private productsCollection:AngularFirestoreCollection<Product>;

  constructor(private readonly afs:AngularFirestore) {
    this.productsCollection =  this.afs.collection<Product>('products');
    this.getProducts();
   }

   async saveProduct(product:Product, productId:string):Promise<void>{
     return new Promise(async (resolve, reject)=> {
      try {
        const id = productId || this.afs.createId();
        const data = {id, ... product};
        const results =  await this.productsCollection.doc(id).set(data);
        resolve(results);
      } catch (error) {
        reject(error.message);
      }
     });
   }

   async deleteProduct(productId:string):Promise<void>{
     return new Promise(async (resolve, reject) =>{
      try {
        const result = await this.productsCollection.doc(productId).delete();
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
     });
   }

    public getOneProduct(id:string):Product { 
      let p:Product = null;
     this.products.forEach(element => {
      console.log(element);
       element.forEach(e => {
        if(typeof e != 'undefined'){
          if(e.id.localeCompare(id)){
            console.log(e);
            p =  e;
          }else{return p;}
        }else {return p;}
       });
     });
     return p;
  }

   private getProducts():void{
     this.products = this.productsCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => a.payload.doc.data() as Product))
     );
   }

}
