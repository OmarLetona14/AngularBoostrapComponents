import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuthenticationService } from 'src/app/services/google-authentication.service';
import { PlataformService } from 'src/app/services/plataform.service';

@Component({
  selector: 'app-socialbuttons',
  templateUrl: './socialbuttons.component.html',
  styleUrls: ['./socialbuttons.component.css']
})
export class SocialbuttonsComponent implements OnInit {

  user:any = {}
  position_web = {'right': '80px', 'bottom': '320px'}
  position_phone = {'right': '40px', 'bottom': '40px'}
  verify:Boolean = false;
  constructor(public router:Router, private googleService:GoogleAuthenticationService, private platarformService:PlataformService) { 
    this.verify =  platarformService.isMobile();
  }

  ngOnInit(): void {
    this.googleService.getCurrentUser().then((results)=>{
      this.user = results;
    });
  }

}
