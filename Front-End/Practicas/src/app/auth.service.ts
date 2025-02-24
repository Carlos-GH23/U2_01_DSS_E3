import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.post(`${this.apiUrl}`, { usuario, contrasenia });
  }

  setLoggedIn(value: boolean) {
    this.loggedIn.next(value);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  logout() {
    this.setLoggedIn(false);
    this.router.navigate(['/']); // Redirige a la página de login
  }

  redirectToLogin(){
    this.setLoggedIn(false);
    this.router.navigate(['/']);
  }


}
