import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClienteComponent } from './pages/cliente/cliente.component';



export const routes: Routes=
[
    {
        path:'',
        component: HomeComponent,
        data: { title: 'Home' }
      },
     
      {
        path:'cliente',
        component: ClienteComponent,
        data: { title: 'cliene' }
      },
     

]