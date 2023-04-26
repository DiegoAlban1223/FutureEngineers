import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [
  {
    path: 'chats',
    component: ChatsComponent,
    children: [
      {
        path: 'new', component: AddChatsComponent,
      },
      {
        path: 'edicion/:id', component: AddChatsComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //[RouterModule.forRoot(routesChats)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
