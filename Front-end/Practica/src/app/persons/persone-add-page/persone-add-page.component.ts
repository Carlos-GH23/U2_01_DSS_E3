import { Component, inject, signal } from '@angular/core';
import { PersonsService } from '../services/persons.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-persone-add-page',
  imports: [HttpClientModule, ReactiveFormsModule],
  templateUrl: './persone-add-page.component.html',
  styleUrl: './persone-add-page.component.css'
})
export class PersoneAddPageComponent {

  personService = inject(PersonsService)

  fb = inject(FormBuilder)
  hasError = signal(false)
  isPosting = signal(true)

  PostForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    correo: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.minLength(7)]],
    edad: [0, [Validators.required, Validators.minLength(1)]],
    
  });

  onSubmit(){
    if(this.PostForm.invalid){
      this.hasError.set(true);
      setTimeout(()=>{
        this.hasError.set(false);
      },2000);
      return;
    }
    const {nombre = '',correo = '',telefono = '', edad = 0 } = this.PostForm.value;
    this.personService.postUsuario(nombre!,correo!,telefono!, edad! ).subscribe(resp => {
      console.log(resp)
    })
  }


}
