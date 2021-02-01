import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlataformService {

  constructor() { }

  isMobile(){
    const userAgent = window.navigator.userAgent;
    console.log(userAgent);
    const pLeft = userAgent.indexOf('(');
    const pRight = userAgent.indexOf(')', pLeft);
    const os = userAgent.substring(pLeft, pRight);
    console.log(os);
    if(os.includes('Android') || 'iPhone' || 'iPad'){
      console.log('Mobile');
      return true
    }
  }
}
