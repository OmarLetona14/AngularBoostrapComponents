import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { FormvalidatorComponent } from '../components/formvalidator/formvalidator.component';

@Injectable({
  providedIn: 'root'
})
export class ContactGuard implements CanDeactivate<FormvalidatorComponent> {

  canDeactivate(component: FormvalidatorComponent): Observable<boolean> | Promise<boolean> | boolean {
    if(component.contactForm.dirty){
      const email = component.contactForm.get('email').value || 'Sir';
      const alertResult = Swal.fire({
        title: 'Datos no enviados',
        validationMessage:'Tus datos aun no han sido enviados', 
        showCancelButton:true,
        showConfirmButton:true 
      }).then((result)=>{
        return result.isConfirmed ? true : false;
      });
      return alertResult;
    }
    return false;
  }
 
  
}
