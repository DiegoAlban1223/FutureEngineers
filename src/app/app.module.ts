import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //llenar
import { MatTableModule } from '@angular/material/table';
import { SimulationComponent } from './component/simulation/simulation.component';
import { SimulationListarComponent } from './component/simulation/simulation-listar/simulation-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    SimulationComponent,
    SimulationListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
