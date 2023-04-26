import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //llenar
import { MatTableModule } from '@angular/material/table';
import { SimulationComponent } from './components/simulation/simulation.component';
import { SimulationListarComponent } from './components/simulation/simulation-listar/simulation-listar.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { SimulationCreaeditaComponent } from './components/simulation/simulation-creaedita/simulation-creaedita.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { SimulationDialogoComponent } from './components/simulation/simulation-listar/simulation-dialogo/simulation-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
  declarations: [
    AppComponent,
    SimulationComponent,
    SimulationListarComponent,
    NavbarComponent,
    SimulationCreaeditaComponent,
    SimulationDialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
