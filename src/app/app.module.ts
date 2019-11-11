import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//SERVICIOS
import {GuerrerosService} from './services/guerreros.service';


//RUTAS
import { appRouting  } from "./app.routes";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GuerrerosComponent } from './components/guerreros/guerreros.component';
import { ɵNgClassImpl, ɵNgStyleImpl } from '@angular/common';
import { GuerreroComponent } from './components/guerrero/guerrero.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    GuerrerosComponent,
    GuerreroComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [
    GuerrerosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
