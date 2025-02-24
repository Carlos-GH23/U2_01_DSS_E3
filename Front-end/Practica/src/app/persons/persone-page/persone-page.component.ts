import { Component, OnInit } from '@angular/core';
import { ApiResponse, User } from '../interfaces/personInterface';
import { PersonsService } from '../services/persons.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-persone-page',
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './persone-page.component.html',
  styleUrl: './persone-page.component.css'
})
export class PersonePageComponent implements OnInit {
  users: User[] | undefined; // Variable para almacenar el array de usuarios

  constructor(private personService: PersonsService) {}

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


}
