//import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListStudentComponent } from './components/list-student/list-student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';

import { HttpClientModule } from '@angular/common/http';
import { ChatsComponent } from './components/chats/chats.component';
import { ListChatsComponent } from './components/chats/list-chats/list-chats.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddChatsComponent } from './components/chats/add-chats/add-chats.component';

import { MatInputModule } from '@angular/material/input'
import{MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './component/navbar/navbar.component';


// import {HttpClientModule} from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //llenar
// import { MatTableModule } from '@angular/material/table';
import { SimulationComponent } from './component/simulation/simulation.component';
import { SimulationListarComponent } from './component/simulation/simulation-listar/simulation-listar.component';
import {MatCardModule} from '@angular/material/card';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import { NavbarComponent } from './component/navbar/navbar.component';
// import {MatIconModule} from '@angular/material/icon';
import { SimulationCreaeditaComponent } from './component/simulation/simulation-creaedita/simulation-creaedita.component';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,

    ListStudentComponent,
    AddStudentComponent,
    ChatsComponent,
    ListChatsComponent,
    AddChatsComponent,
    SimulationComponent,
    SimulationListarComponent,
    NavbarComponent,
    SimulationCreaeditaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,

    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
