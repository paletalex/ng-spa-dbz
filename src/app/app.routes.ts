import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GuerrerosComponent } from './components/guerreros/guerreros.component';
import { GuerreroComponent } from './components/guerrero/guerrero.component';
import { BuscadorComponent } from './components/buscador/buscador.component';



const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'guerreros', component: GuerrerosComponent },
    { path: 'guerrero/:id', component: GuerreroComponent },
    { path: 'buscar/:texto', component: BuscadorComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);

