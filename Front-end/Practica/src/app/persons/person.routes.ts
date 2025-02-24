import {  Routes } from "@angular/router";
import { PersonePageComponent } from "./persone-page/persone-page.component";
import { PersoneAddPageComponent } from "./persone-add-page/persone-add-page.component";
import { PersoneListPageComponent } from "./persone-list-page/persone-list-page.component";
import { PersoneUpdatePageComponent } from "./persone-update-page/persone-update-page.component";

export const personRoutes:Routes = [
    {
        path:"",
        component:PersonePageComponent,
        children:[
            {
                path:'lista',
                component:PersoneListPageComponent,
            },
            {
                path:'añadir',
                component: PersoneAddPageComponent,
            },
            {
                path:'actualizar',
                component:PersoneUpdatePageComponent,
            }
        ]
    }
]
export default personRoutes;