import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleAuthenticationService } from 'src/app/services/google-authentication.service';
import  Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passwordType:string = 'password'
  private emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  public loginForm: FormGroup;  

  constructor(private fb:FormBuilder, private googleLoginService:GoogleAuthenticationService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onLogin(){
    if (this.loginForm.valid){
      const formValues = this.loginForm.value;
      try {
     
      } catch (error) {
        Swal.fire('Ocurrio un error', `<strong>
      Ocurrio un error al intentar enviar su mensaje <br>
      por favor, intentelo de nuevo.
      </strong>`, 'error');
      }
      
      Swal.fire('Mensaje enviado', `<strong>
      Su mensaje ha sido enviado, <br>
      pronto nos pondremos en contacto
      con usted.</strong>`, 'success');
      this.loginForm.reset();
    }
    else{
      Swal.fire('Campos incorrectos', `<strong>
      Por favor, llene todos los campos de manera correcta.
      </strong>`, 'error');
    }
  }

  isValidData():String{
    if (this.loginForm.valid){
      return 'btn-success';
    }
    else{
      return 'btn-danger';
    }
  }

  validField(fieldName:string):string{
    const validatedField = this.loginForm.get(fieldName);
    return (!validatedField?.valid && validatedField?.touched)
    ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }

  showPassword(){
    if (this.passwordType == 'text') {
        this.passwordType = 'password';
    }else{
      this.passwordType = 'text'
    }
  }

  private initForm():void{
    this.loginForm = this.fb.group({
      // Estructura [valor inicial, validaciones  ]
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required]]
    });
  }

  onGoogleLogin(){
    this.googleLoginService.logIn();
  }

}
