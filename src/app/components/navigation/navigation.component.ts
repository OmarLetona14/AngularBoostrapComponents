import { Component, OnInit } from '@angular/core';
import { GoogleAuthenticationService } from 'src/app/services/google-authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user:any = {};
  constructor(private googleService:GoogleAuthenticationService) { 
    this.getUser();
  }

  ngOnInit(): void {
    
  }

  signOut(){
    this.googleService.logOutWithEmail();
    window.location.href='/home';
  }

  getUser(){
    this.googleService.getCurrentUser()
    .then((results)=>{
      this.user = results;
    }).catch((error)=>{
      console.log(error);
    });
  }

}
