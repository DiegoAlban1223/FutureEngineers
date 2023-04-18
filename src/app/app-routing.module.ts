import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SimulationComponent } from './component/simulation/simulation.component';
import { SimulationCreaeditaComponent } from './component/simulation/simulation-creaedita/simulation-creaedita.component';
import { UsersComponent } from './components/users/users.component';
import { CreaeditaUsersComponent } from './components/users/creaedita-users/creaedita-users.component';

const routes: Routes = [
  {path: 'users', component:UsersComponent, children:
[
  {
    path:'new', component:CreaeditaUsersComponent
  }
]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
