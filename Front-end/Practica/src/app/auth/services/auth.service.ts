import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { ApiResponse } from '../interfaces/authInterface';
import { Observable, of, tap } from 'rxjs';

type AuthStatus = 'checking'|'authenticated'|'not-authenticated'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:8000/api/auth/signin'

  constructor() { }

  private _authStatus = signal<AuthStatus>('checking');
  private _token = signal<string | null>(null)

  private http = inject(HttpClient)

  authStatus = computed<AuthStatus>(()=>{
    if( this._authStatus() == 'checking') return'checking';
    if(this._token()){
      return 'authenticated'
    }
    return 'not-authenticated'
  })

  login(usuario:string,contrasenia:string){
    return this.http.post<ApiResponse>(`${this.url}`,{
      usuario:usuario,
      contrasenia:contrasenia
    }).pipe(
      tap(resp=>{
          this._authStatus.set('authenticated');
          this._token.set(resp.data.token);
          localStorage.setItem('token',resp.data.token);
      })
    )
  }

  checkStatus(): Observable<boolean>{
    const token = localStorage.getItem('token');
    if (!token){
      this.logout();
      return of(false);
    }
    return of(true);
  }

  logout(){
    this._token.set(null)
    this._authStatus.set('not-authenticated')
    localStorage.removeItem('token');
  }








}

