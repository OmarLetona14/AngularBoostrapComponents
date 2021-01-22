import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socialbuttons',
  templateUrl: './socialbuttons.component.html',
  styleUrls: ['./socialbuttons.component.css']
})
export class SocialbuttonsComponent implements OnInit {

  position_web = {'right': '80px', 'bottom': '320px'}
  position_phone = {'right': '40px', 'bottom': '40px'}
  verify:Boolean = false;
  constructor(public router:Router) { 
    this.isMobile();
  }

  ngOnInit(): void {

  }

  isMobile(){
    const userAgent = window.navigator.userAgent;
    const pLeft = userAgent.indexOf('(');
    const pRight = userAgent.indexOf(')', pLeft);
    const os = userAgent.substring(pLeft, pRight);
    if(os.includes('Android' || 'iPhone' || 'iPad')){
      this.verify = true;
    }
  }

}
