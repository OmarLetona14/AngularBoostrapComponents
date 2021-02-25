import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleAuthenticationService } from 'src/app/services/google-authentication.service';
import { SpinnerService } from 'src/app/services/spinner.service';
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

  constructor(private fb:FormBuilder, private googleLoginService:GoogleAuthenticationService, 
    private spinner:SpinnerService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onLogin(){
    if (this.loginForm.valid){
      try {
        this.spinner.getSpinner();
        this.googleLoginService.logInWithEmail(
          this.loginForm.get('email').value,
          this.loginForm.get('password').value
        ).then((results)=>{
          Swal.fire('Bienvenido', `<strong>
          Bienvenido ${results.user.email}
          </strong>`, 'success');
          window.location.href='/home'
          this.spinner.stopSpinner();
          this.loginForm.reset();
        }).catch((error)=>{
          Swal.fire('Credenciales incorrectas', `<strong>
          Email o password incorrectos, por favor <br>
          inténtelo de nuevo.
          </strong>`, 'error');
          this.spinner.stopSpinner();
          this.loginForm.reset();
        });
      } catch (error) {
        Swal.fire('Ocurrio un error', `<strong>
         Error al comunicarse con el servidor.
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
    try {
      this.spinner.getSpinner();
      this.googleLoginService.logInWithGoogle().then((results)=>{
        //window.location.href='/home'
        var credentials = results.credential;
        console.log(credentials);
        Swal.fire('Bienvenido', `<strong>
        Bienvenido ${results.user.email}
        </strong>`, 'success');
        this.spinner.stopSpinner();
        this.loginForm.reset();
      }).catch((error)=>{
        Swal.fire('Credenciales incorrectas', `<strong>
        Email o password incorrectos, por favor <br>
        inténtelo de nuevo
        </strong>`, 'error');
        this.spinner.stopSpinner();
        this.loginForm.reset();
      });
    } catch (error) {
      Swal.fire('Ocurrio un error', `<strong>
       Error al comunicarse con el servidor.
      </strong>`, 'error');
    }
  }

}
