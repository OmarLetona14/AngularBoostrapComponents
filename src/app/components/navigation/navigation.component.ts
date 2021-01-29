import { Component, OnInit } from '@angular/core';
import { GoogleAuthenticationService } from 'src/app/services/google-authentication.service';
import { PlataformService } from 'src/app/services/plataform.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  web:boolean;
  webStyle = 'item-web'
  mobileStyle = 'item-mobile'
  user:any = {};
  constructor(private googleService:GoogleAuthenticationService, private spinner:SpinnerService, private plataformService:PlataformService) { 
    this.getUser();
  }

  ngOnInit(): void {
    this.web =this.plataformService.isMobile();
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
