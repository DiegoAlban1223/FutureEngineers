//import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { ChatsComponent } from './services/chats/chats.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatsComponent } from './components/chats/chats.component';
import { ListChatsComponent } from './components/chats/list-chats/list-chats.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//////////import { ListChatsComponent } from './components/list-chats/list-chats.component';
//import { ListChatsComponent } from './component/list-chats/list-chats.component';
import { MatTableModule } from '@angular/material/table';
import { UsersComponent } from './components/users/users.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';

import { SimulationComponent } from './component/simulation/simulation.component';
import { SimulationListarComponent } from './component/simulation/simulation-listar/simulation-listar.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './component/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { SimulationCreaeditaComponent } from './component/simulation/simulation-creaedita/simulation-creaedita.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
//import {MatFormFieldModule} from '@angular/material';
import { StudentsComponent } from './component/students/students.component';
import { StudentsListarComponent } from './component/students/students-listar/students-listar.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    ChatsComponent,
    ListChatsComponent,
    UsersComponent,
    ListUsersComponent,
    ////////////ListChatsComponent,
    //ListChatsComponent,
    // ChatsComponent
    SimulationComponent,
    SimulationListarComponent,
    NavbarComponent,
    SimulationCreaeditaComponent,
    StudentsComponent,
    StudentsListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule
  ],
  exports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
