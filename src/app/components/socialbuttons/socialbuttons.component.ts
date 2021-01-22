import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socialbuttons',
  templateUrl: './socialbuttons.component.html',
  styleUrls: ['./socialbuttons.component.css']
})
export class SocialbuttonsComponent implements OnInit {

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
    console.log(userAgent);
    console.log(os);
    if(os.includes('Android' || 'iPhone' || 'iPad')){
      this.verify = true;
    }
  }

}
