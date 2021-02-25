import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from 'firebase/app'
import { User } from '../model/User';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthenticationService {

  user:User;
  constructor(private auth:AngularFireAuth){}

  logInWithGoogle(){
    const results = this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    return results;
  }

  logOutWithGoogle(){
    this.auth.signOut();
  }

  async logInWithEmail(email:string, password:string){
    const result = await this.auth.signInWithEmailAndPassword(email, password);
    return result;
  }

  async logOutWithEmail(){
    await this.auth.signOut();
  }

  async register(email:string, password:string){

    const result = await (await this.auth.createUserWithEmailAndPassword(email, password));
    return result;
    
  }
  
  getCurrentUser(){
    return this.auth.authState.pipe(first()).toPromise();   
  }
}
