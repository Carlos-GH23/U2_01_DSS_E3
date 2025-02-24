import {  Routes } from "@angular/router";
import { AuthLayoutComponent } from "./auth-layout/auth-layout.component";
import { LoginPageComponent } from "./login-page/login-page.component";

export const authRoutes:Routes = [
    {
        path:"",
        component:AuthLayoutComponent,
        children:[
            {
                path:'login',
                component: LoginPageComponent,
            },
        ]
    }
]
export default authRoutes;