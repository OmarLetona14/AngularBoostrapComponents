import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesServiceService } from 'src/app/services/countries-service.service';
import { GoogleAuthenticationService } from 'src/app/services/google-authentication.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  public registerForm: FormGroup;  
  passwordType:string = 'password'
  country:string =''
  countries:any = []
  constructor(private countryService:CountriesServiceService, private fb:FormBuilder, private spinner:SpinnerService,
    private userService:UserService, private googleService:GoogleAuthenticationService) { }

  ngOnInit(): void {
    this.initForm();
    this.getAllCountries();
  }

  async onSaveData():Promise<void>{
    if (this.registerForm.valid){
      const formValues = this.registerForm.value;
      try {
        this.spinner.getSpinner();
        this.googleService.register(this.registerForm.get('email').value, 
        this.registerForm.get('password').value).then((results)=>{
          this.spinner.stopSpinner();
          results.additionalUserInfo.profile = formValues;
          Swal.fire('Registro exitoso', `<strong>
          Sus datos han sido guardados, <br>
          hemos enviado un correo de verificacion a su bandeja de entrada.
            </strong>`, 'success');
          this.registerForm.reset();
        })
        .catch((error)=>{
          var errorCode = error.code;
          var errorMessage = error.message;
          Swal.fire('Ocurrio un error', `<strong>
          ${errorCode} : ${errorMessage}
            </strong>`, 'error');
            this.spinner.stopSpinner();
        });
        /*
        await this.userService.saveUser(formValues,null).then(()=>{
          this.spinner.stopSpinner();
        });   */
        
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
    if (this.registerForm.valid){
      return 'btn-info';
    }
    else{
      return 'btn-danger';
    }
  }

  validField(fieldName:string):string{
    const validatedField = this.registerForm.get(fieldName);
    return (!validatedField?.valid && validatedField?.touched)
    ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }

  private initForm():void{
    this.registerForm = this.fb.group({
      // Estructura [valor inicial, validaciones  ]
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required]],
      country: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  showPassword(){
    if (this.passwordType == 'text') {
        this.passwordType = 'password';
    }else{
      this.passwordType = 'text'
    }
  }

  getAllCountries(){
    this.spinner.getSpinner();
    this.countryService.getCountries().subscribe(
      res=>{this.countries = res
      this.spinner.stopSpinner()},
      err=>{console.error(err)}
    );
  }



}
