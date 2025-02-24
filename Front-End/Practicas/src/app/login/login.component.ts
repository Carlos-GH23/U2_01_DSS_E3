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
      this.loading = true; // Inicia el estado de carga

      this.authService.login(this.usuario, this.contrasenia).subscribe(
        response => {
          // Maneja la respuesta del login, por ejemplo, redirige al dashboard
          console.log('Login exitoso:', response);
          this.loading = false; // Detiene el estado de carga
          // Aquí puedes redirigir a otra página o manejar el estado del usuario
        },
        error => {
          this.loading = false; // Detiene el estado de carga
        }
      );
    }
  }



}
