import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SimulationComponent } from './components/simulation/simulation.component';
import { SimulationCreaeditaComponent } from './components/simulation/simulation-creaedita/simulation-creaedita.component';

const routes: Routes = [
  {path: 'simulations', component:SimulationComponent, children:
  [
  {
    path:'new', component:SimulationCreaeditaComponent
  },
  {
    path:'edicion/:id', component:SimulationCreaeditaComponent
  }
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
