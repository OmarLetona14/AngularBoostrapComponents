import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-formvalidator',
  templateUrl: './formvalidator.component.html',
  styleUrls: ['./formvalidator.component.css']
})
export class FormvalidatorComponent implements OnInit {

  private emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  public contactForm: FormGroup;  

  constructor(private fb:FormBuilder, private contactService:ContactService, private spinner:SpinnerService) { }

  ngOnInit(): void {
    this.initForm();
  }

  async onSaveData():Promise<void>{
    if (this.contactForm.valid){
      const formValues = this.contactForm.value;
      try {
        this.spinner.getSpinner();
        await this.contactService.saveContact(formValues).then(()=>{
          this.spinner.stopSpinner();    
          Swal.fire('Mensaje enviado', `<strong>
          Su mensaje ha sido enviado, <br>
          pronto nos pondremos en contacto
          con usted.</strong>`, 'success');
          this.contactForm.reset();
        });
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
    if (this.contactForm.valid){
      return 'btn-success';
    }
    else{
      return 'btn-danger';
    }
  }

  validField(fieldName:string):string{
    const validatedField = this.contactForm.get(fieldName);
    return (!validatedField?.valid && validatedField?.touched)
    ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }

  private initForm():void{
    this.contactForm = this.fb.group({
      // Estructura [valor inicial, validaciones  ]
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      message: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
    });
  }

}
