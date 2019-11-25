import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { FormsModule } from '@angular/forms';

import {NgbModule,NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
   HomeComponent,
   NavBarComponent,
   ClienteComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    RouterModule.forRoot(routes),
    FormsModule,
   

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
