import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// <<<<<<< HEAD
// import { ChatsComponent } from './components/chats/chats.component';
// import { AddChatsComponent } from './components/chats/add-chats/add-chats.component';

// const routes: Routes = [
//   {
//     path: 'chats',component: ChatsComponent,children: [
//       {
//         path: 'new', component: AddChatsComponent,
//       },
//     ],

//   },

// ];

import { NavbarComponent } from './component/navbar/navbar.component';
import { SimulationComponent } from './component/simulation/simulation.component';
import { SimulationCreaeditaComponent } from './component/simulation/simulation-creaedita/simulation-creaedita.component';

const routes: Routes = [
  {path: 'simulations', component:SimulationComponent, children:
[
  {
    path:'new', component:SimulationCreaeditaComponent
  }
]}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
