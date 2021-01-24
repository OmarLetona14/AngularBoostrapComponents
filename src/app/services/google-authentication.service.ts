import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthenticationService {

  constructor(public auth:AngularFireAuth){}

  logIn(){
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logOut(){
    this.auth.signOut();
  }
  
}
