import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleAuthenticationService } from 'src/app/services/google-authentication.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile:any = {};
  user:any = {}
  private emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  public userForm : FormGroup;  
  noProfile: 'https://www.kindpng.com/picc/m/22-223965_no-profile-picture-icon-circle-member-icon-png.png'
  constructor(private fb:FormBuilder, private userService:GoogleAuthenticationService, private spinner:SpinnerService) { 
    this.spinner.getSpinner();
    this.userService.getCurrentUser()
    .then((results)=>{
      this.userForm.patchValue(this.user);
      this.userProfile = results.providerData;
      console.log(results); 
      this.spinner.stopSpinner();
    });
  }

  ngOnInit(): void {
    this.initForm();
     
  }

  async onSaveData():Promise<void>{
    if (this.userForm.valid){
      const formValues = this.userForm.value;
      try {
        this.user.update
      } catch (error) {
        Swal.fire('Ocurrio un error', `<strong>
      Ocurrio un error al intentar enviar su mensaje <br>
      por favor, intentelo de nuevo.
      </strong>`, 'error');
      }
    }
    else{
      Swal.fire('Campos incorrectos', `<strong>
      Por favor, llene todos los campos de manera correcta.
      </strong>`, 'error');
    }
  }

  isValidData():String{
    if (this.userForm.valid){
      return 'btn-success';
    }
    else{
      return 'btn-danger';
    }
  }

  validField(fieldName:string):string{
    const validatedField = this.userForm.get(fieldName);
    return (!validatedField?.valid && validatedField?.touched)
    ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }

  private initForm():void{
    this.userForm = this.fb.group({
      // Estructura [valor inicial, validaciones  ]
      displayName: ['', [Validators.required]],
      photoURL: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      message: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
    });
  }

}
