import { Component, OnInit } from '@angular/core';
import { ApiResponse, User } from '../interfaces/personInterface';
import { PersonsService } from '../services/persons.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-persone-list-page',
  imports: [CommonModule],
  templateUrl: './persone-list-page.component.html',
  styleUrl: './persone-list-page.component.css'
})
export class PersoneListPageComponent {
  users: User[] | undefined; // Variable para almacenar el array de usuarios

  constructor(private personService: PersonsService) { }
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.personService.getUsuarios().subscribe(
      (data) => {
        console.log(data)
        this.users = data; // Almacenar el array de usuarios en la variable
      },
      (error) => {
        console.error('Error al cargar los usuarios:', error);
      }
    );
  }

  DelateUsers(id:number): void {
    this.personService.deleteUsuario(id).subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.error('Error al eliminar', error);
      }
    );
  }

  
}
