import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:any = new Array();
  private usersCollection:AngularFirestoreCollection<User>;

  constructor(private readonly afs:AngularFirestore) {
    this.usersCollection =  this.afs.collection<User>('users');
   }

   async saveUser(user:User, userId:string):Promise<void>{
     return new Promise(async (resolve, reject)=> {
      try {
        const id = userId || this.afs.createId();
        const data = {id, ... user};
        const results =  await this.usersCollection.doc(id).set(data);
        resolve(results);
      } catch (error) {
        reject(error.message);
      }
     });
   }

   async deleteUser(userId:string):Promise<void>{
     return new Promise(async (resolve, reject) =>{
      try {
        const result = await this.usersCollection.doc(userId).delete();
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
     });
   }

   public getUsers():Promise<any>{
    return this.usersCollection.get().toPromise();
   }

}
