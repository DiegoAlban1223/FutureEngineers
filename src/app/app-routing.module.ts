import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './components/chats/chats.component';
import { AddChatsComponent } from './components/chats/add-chats/add-chats.component';

const routes: Routes = [
  {
    path: 'chats',component: ChatsComponent,children: [
      {
        path: 'new', component: AddChatsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
