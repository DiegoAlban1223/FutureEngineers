import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SimulationComponent } from './components/simulation/simulation.component';
import { SimulationCreaeditaComponent } from './components/simulation/simulation-creaedita/simulation-creaedita.component';
import { StudentComponent } from './components/student/student.component';
import { StudentCreaeditaComponent } from './components/student/student-creaedita/student-creaedita.component';
import { StudentListarComponent } from './components/student/student-listar/student-listar.component';
import { UsersComponent } from './components/users/users.component';
import { CreaeditaUsersComponent } from './components/users/creaedita-users/creaedita-users.component';

const routes: Routes = [
  {path: 'simulations', component:SimulationComponent, children:
[
  {
    path:'new', component:SimulationCreaeditaComponent
  },
  {
    path:'edicion/:id', component:SimulationCreaeditaComponent
  }
]},
  {path: 'students', component:StudentComponent, children:
  [
    {
      path:'new',component:StudentCreaeditaComponent
    },
    {
      path:'edicion/:id',component:StudentCreaeditaComponent
    }
  ]
  },
  {path: 'users', component:UsersComponent, children:
  [
    {
      path:'new',component:CreaeditaUsersComponent
    },
    {
      path:'edicion/:id',component:CreaeditaUsersComponent
    }
  ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
