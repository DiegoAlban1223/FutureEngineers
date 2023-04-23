import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SimulationComponent } from './components/simulation/simulation.component';
import { SimulationCreaeditaComponent } from './components/simulation/simulation-creaedita/simulation-creaedita.component';
import { StudentComponent } from './components/student/student.component';
import { StudentCreaeditaComponent } from './components/student/student-creaedita/student-creaedita.component';
import { StudentListarComponent } from './components/student/student-listar/student-listar.component';

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
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
