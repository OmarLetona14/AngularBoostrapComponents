import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { GoogleAuthenticationService } from 'src/app/services/google-authentication.service';
import { PlataformService } from 'src/app/services/plataform.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-socialbuttons',
  templateUrl: './socialbuttons.component.html',
  styleUrls: ['./socialbuttons.component.css']
})
export class SocialbuttonsComponent implements OnInit {

  webStyle:'web'
  phoneStyle: 'item-mobile'
  user:any = {}
  position_phone_plus = {'right': '20px', 'bottom': '280px'}
  position_web_plus = {'right': '20px', 'bottom': '240px'}
  position_web = {'right': '20px', 'bottom': '320px'}
  position_phone = {'right': '20px', 'bottom': '40px'}
  position_web_profile = {'right': '20px', 'bottom': '80px'}
  position_phone_profile = {'right': '20px', 'bottom': '120px'}
  position_web_signout = {'right': '20px', 'bottom': '160px'}
  position_phone_signout = {'right': '20px', 'bottom': '200px'}
  verify:Boolean = false;
  constructor(public router:Router, private googleService:GoogleAuthenticationService, 
    private platarformService:PlataformService, private spinner:SpinnerService, public location: Location) { 
    this.verify =  platarformService.isMobile();
  }

  ngOnInit(): void {
    this.googleService.getCurrentUser().then((results)=>{
      this.user = results;
    });
  }

  signOut(){
    this.spinner.getSpinner();
    this.googleService.logOutWithEmail().then((results)=>{
      this.spinner.stopSpinner();
      window.location.href='/home';
    })
    .then(()=>{
      this.spinner.stopSpinner();
    });
  }

  goBack(){
    if(this.user!=null || undefined){
      this.location.isCurrentPathEqualTo('/home')
      this.location.back();
    } 
  }
}
