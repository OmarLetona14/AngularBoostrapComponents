import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesServiceService } from 'src/app/services/countries-service.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  public registerForm: FormGroup;  
  public over:string = '';
  passwordType:string = 'password'
  country:string =''
  countries:any = []
  constructor(private countryService:CountriesServiceService, private fb:FormBuilder, private spinner:SpinnerService) { }

  ngOnInit(): void {
    this.initForm();
    this.spinner.getSpinner();
    this.countryService.getCountries().subscribe(
      res=>{this.countries = res
      this.spinner.stopSpinner()},
      err=>{console.error(err)}
    );
  }
  async onSaveData():Promise<void>{
    if (this.registerForm.valid){
      const formValues = this.registerForm.value;
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
      this.registerForm.reset();
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
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required]],
    });
  }

  showPassword(){
    if (this.passwordType == 'text') {
        this.passwordType = 'password';
    }else{
      this.passwordType = 'text'
    }
  }


}
