import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlataformService {

  constructor() { }

  isMobile(){
    const userAgent = window.navigator.userAgent;
    const pLeft = userAgent.indexOf('(');
    const pRight = userAgent.indexOf(')', pLeft);
    const os = userAgent.substring(pLeft, pRight);
    if(os.includes('Android') || os.includes('iPhone') 
    || os.includes('iPad')){
      return true
    }
  }
}
