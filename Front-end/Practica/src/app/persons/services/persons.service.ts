import { HttpClient, HttpHeaders } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { ApiResponse,ApiResponseDelete,ApiResponseGet } from '../interfaces/personInterface';

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated'

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  url = 'http://localhost:8000/api/personas';

  private http = inject(HttpClient)

  getUsuarios() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Usar el token en el encabezado
    });
    return this.http.get<ApiResponse>(`${this.url}`, { headers }).pipe(
      map(resp => resp.data)
    )
  }

  postUsuario(nombre:string,correo:string,telefono:string,edad:number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Usar el token en el encabez
    });
    return this.http.post<ApiResponse>(`${this.url}/crear`,{
      name:nombre,
      email:correo,
      age:edad,
      telefono:telefono,
    },{ headers }).pipe(
      map(resp => console.log(resp))
    )
  }

  deleteUsuario(id:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Usar el token en el encabez
    });
    return this.http.delete<ApiResponseDelete>(`${this.url}/borrar/${id}`,{ headers }).pipe(
      map(resp => console.log(resp))
    )

  }

  getUsurio(id:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Usar el token en el encabezado
    });
    return this.http.get<ApiResponseGet>(`${this.url}/${id}`, { headers }).pipe(
      map(resp => resp.data)
    )
  }

  updateUsuario(id:number,nombre:string,correo:string,telefono:string,edad:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Usar el token en el encabez
    });
    return this.http.put<ApiResponse>(`${this.url}/modificar/${id}`,{
      name:nombre,
      email:correo,
      age:edad,
      telefono:telefono,
    },{ headers }).pipe(
      map(resp => console.log(resp))
    )
  }

}
