import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../interfaces/personInterface';
import { PersonsService } from '../services/persons.service';

@Component({
  selector: 'app-persone-update-page',
  imports: [CommonModule],
  templateUrl: './persone-update-page.component.html',
  styleUrl: './persone-update-page.component.css'
})
export class PersoneUpdatePageComponent {
  user: User | undefined; 

  constructor(private personService:PersonsService){}
  

  loadUser(id:number): void {
    this.personService.getUsurio(id).subscribe(
      (data: User | undefined) => {
        console.log(data)
        this.user = data; // Almacenar el array de usuarios en la variable
      },
      (error: any) => {
        console.error('Error al cargar los usuarios:', error);
      }
    );
  }

}
