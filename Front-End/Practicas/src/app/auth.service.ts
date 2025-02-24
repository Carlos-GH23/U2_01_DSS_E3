import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private apiUrl = 'http://localhost:8000/api/auth/signin';

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario: string, contrasenia: string): Observable<any> {
    const body = { usuario, contrasenia };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' 
    });
    console.log(headers)
    return this.http.post(`${this.apiUrl}`,body, { headers });
  }

  authenticate(usuario: string, contrasenia: string): void {
    this.login(usuario, contrasenia).subscribe(
      response => {
        const token = response.token; 
        console.log('Token recibido:', token);
        localStorage.setItem('authToken', token)
      },
      error => {
        console.error('Error de inicio de sesión:', error);
      }
    );
  }

  setLoggedIn(value: boolean) {
    this.loggedIn.next(value);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  logout() {
    this.setLoggedIn(false);
    localStorage.clear();
    this.router.navigate(['/']); // Redirige a la página de login
  }

  redirectToLogin(){
    this.setLoggedIn(false);
    localStorage.clear()
    this.router.navigate(['/']);
  }


}
