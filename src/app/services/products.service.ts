import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../model/Product';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  countries:any = new Array();
  private productsCollection:AngularFirestoreCollection<Product>;

  constructor(private readonly afs:AngularFirestore, private spinner:SpinnerService) {
    this.productsCollection =  this.afs.collection<Product>('products');
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

   public getProducts():Promise<any>{
    
    return this.productsCollection.get().toPromise();
     /*this.products = this.productsCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => a.payload.doc.data() as Product))
     );*/
   }


}
