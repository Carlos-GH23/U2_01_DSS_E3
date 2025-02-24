import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: string = '';
  contrasenia: string = '';
  loading = false;

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.usuario && this.contrasenia) {
      this.loading = true;

      this.authService.login(this.usuario, this.contrasenia).subscribe(
        response => {
          console.log('Login exitoso:', response);
          this.loading = false; 
        },
        error => {
          this.loading = false;
        }
      );
    }
  }



}
