import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// <<<<<<< HEAD
import { ChatsComponent } from './components/chats/chats.component';
import { AddChatsComponent } from './components/chats/add-chats/add-chats.component';

// const routes: Routes = [
//   {
//     path: 'chats',component: ChatsComponent,children: [
//       {
//         path: 'new', component: AddChatsComponent,
//       },
//     ],

//   },

// ];

import { NavbarComponent } from './components/navbar/navbar.component';
import { SimulationComponent } from './components/simulation/simulation.component';
import { SimulationCreaeditaComponent } from './components/simulation/simulation-creaedita/simulation-creaedita.component';

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
        component: AddChatsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //[RouterModule.forRoot(routesChats)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
