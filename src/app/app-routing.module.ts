import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SimulationComponent } from './component/simulation/simulation.component';
import { SimulationCreaeditaComponent } from './component/simulation/simulation-creaedita/simulation-creaedita.component';
import { UsersComponent } from './components/users/users.component';
import { CreaeditaUsersComponent } from './components/users/creaedita-users/creaedita-users.component';
import { ChatsComponent } from './components/chats/chats.component';
import { AddStudentComponent } from './components/add-student/add-student.component';

const routes: Routes = [
  {
    path: 'simulations',
    component: SimulationComponent,
    children: [
      {
        path: 'new',
        component: SimulationCreaeditaComponent,
      },
    ],
  },
  {
    path: 'chats',
    component: ChatsComponent,
    children: [
      {
        path: 'new',
        component: AddStudentComponent,
      },
    ],
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: 'new',
        component: CreaeditaUsersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
