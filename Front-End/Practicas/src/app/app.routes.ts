import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PersonsComponent } from './persons/persons.component';

export const routes: Routes = [
    { path:"", component:LoginComponent,},
    { path:"personas", component:PersonsComponent}
];
