import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  authService = inject(AuthService)

  fb = inject(FormBuilder)
  hasError = signal(false)
  isPosting = signal(true)

  loginForm = this.fb.group({
    usuario:['',[Validators.required, Validators.email]],
    contrasenia:['',[Validators.required, Validators.minLength(3)]],
  });

  onSubmit(){
    if(this.loginForm.invalid){
      this.hasError.set(true);
      setTimeout(()=>{
        this.hasError.set(false);
      },2000);
      return;
    }
    const {usuario = '',contrasenia = '' } = this.loginForm.value;
    this.authService.login(usuario!,contrasenia!).subscribe(resp => {
      console.log(resp)
    })
  }


}
