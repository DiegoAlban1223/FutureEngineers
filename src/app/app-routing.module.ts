import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SimulationComponent } from './component/simulation/simulation.component';
import { SimulationCreaeditaComponent } from './component/simulation/simulation-creaedita/simulation-creaedita.component';
import { MembershipComponent } from './component/membership/membership.component';
import { MembershipCreaeditaComponent } from './component/membership/membership-creaedita/membership-creaedita.component';


const routes: Routes = [
  {path: 'simulations',  component:SimulationComponent,children:

  
[
  {
    path:'new', component:SimulationCreaeditaComponent
  },
  {
    path: 'membership', component:MembershipCreaeditaComponent
  }
]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
