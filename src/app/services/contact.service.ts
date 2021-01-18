import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Contact} from "../model/Contact";
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts:Observable<Contact>;
  private contactCollection:AngularFirestoreCollection<Contact>;

  constructor(private readonly afs: AngularFirestore, private spinner:SpinnerService) {
    this.contactCollection = afs.collection<Contact>('contacts');
   }


   async saveContact(contactForm: Contact): Promise<void>{
    return new Promise( async(resolve, reject) =>{
      try {
        const id =this.afs.createId();
        const data = {id, ... contactForm};
        const result = this.contactCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
   }
}
