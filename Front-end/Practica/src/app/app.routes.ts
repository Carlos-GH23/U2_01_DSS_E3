import { Routes } from '@angular/router';
import { authGuard } from './auth/guard/authguard.guard';

export const routes: Routes = [
    {
        path:'auth',
        loadChildren:()=> import('./auth/auth.routes'),canMatch:[authGuard]
    },
    {
        path:'',
        loadChildren: ()=> import('./persons/person.routes')
    }
];
