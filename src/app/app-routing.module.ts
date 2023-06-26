import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SimulationComponent } from './components/simulation/simulation.component';
import { SimulationCreaeditaComponent } from './components/simulation/simulation-creaedita/simulation-creaedita.component';
import { StudentComponent } from './components/student/student.component';
import { StudentCreaeditaComponent } from './components/student/student-creaedita/student-creaedita.component';
import { UsersComponent } from './components/users/users.component';
import { CreaeditaUsersComponent } from './components/users/creaedita-users/creaedita-users.component';
import { ChatsComponent } from './components/chats/chats.component';
import { MembershipsComponent } from './components/memberships/memberships.component';
import { CreaeditaMembershipsComponent } from './components/memberships/creaedita-memberships/creaedita-memberships.component';
import { CreaeditaChatsComponent } from './components/chats/creaedita-chats/creaedita-chats.component';
import { TestsComponent } from './components/tests/tests.component';
import { CreaeditaTestsComponent } from './components/tests/creaedita-tests/creaedita-tests.component';
import { ProfessionsComponent } from './components/professions/professions.component';
import { CreaeditaProfessionsComponent } from './components/professions/creaedita-professions/creaedita-professions.component';
import { ExamsComponent } from './components/exams/exams.component';
import { CreaeditaExamsComponent } from './components/exams/creaedita-exams/creaedita-exams.component';
import { TutorsComponent } from './components/tutors/tutors.component';
import { CreaeditaTutorsComponent } from './components/tutors/creaedita-tutors/creaedita-tutors.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { CreaeditaRoomsComponent } from './components/rooms/creaedita-rooms/creaedita-rooms.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { Reporte01Component } from './components/reportes/reporte01/reporte01.component';
import { Reporte02Component } from './components/reportes/reporte02/reporte02.component';
import { Reporte03Component } from './components/reportes/reporte03/reporte03.component';
import { Reporte04Component } from './components/reportes/reporte04/reporte04.component';

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

  {path: 'memberships', component:MembershipsComponent, children:
  [
  {
    path:'new', component:CreaeditaMembershipsComponent
  },
  {
    path:'edicion/:id', component:CreaeditaMembershipsComponent
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
  ]},

  {path: 'users', component:UsersComponent, children:
  [
    {
      path:'new',component:CreaeditaUsersComponent
    },
    {
      path:'edicion/:id',component:CreaeditaUsersComponent
    }
  ]
  },

  {path: 'chats', component:ChatsComponent, children:
  [
    {
      path:'new',component:CreaeditaChatsComponent
    },
    {
      path:'edicion/:id',component:CreaeditaChatsComponent
    }
  ]
  },

  {path: 'tests', component:TestsComponent, children:
  [
    {
      path:'new',component:CreaeditaTestsComponent
    },
    {
      path:'edicion/:id',component:CreaeditaTestsComponent
    }
  ]
  },

  {path: 'professions', component:ProfessionsComponent, children:
  [
    {
      path:'new',component:CreaeditaProfessionsComponent
    },
    {
      path:'edicion/:id',component:CreaeditaProfessionsComponent
    }
  ]
  },

  {path: 'exams', component:ExamsComponent, children:
  [
    {
      path:'new',component:CreaeditaExamsComponent
    },
    {
      path:'edicion/:id',component:CreaeditaExamsComponent
    }
  ]
  },

  {path: 'rooms', component:RoomsComponent, children:
  [
    {
      path:'new',component:CreaeditaRoomsComponent
    },
    {
      path:'edicion/:id',component:CreaeditaRoomsComponent
    }
  ]
  },

  {path: 'tutors', component:TutorsComponent, children:
  [
    {
      path:'new',component:CreaeditaTutorsComponent
    },
    {
      path:'edicion/:id',component:CreaeditaTutorsComponent
    }
  ]
  },
  {path: 'reportes', component:ReportesComponent, children:
  [
    {
      path:'reporte1',component:Reporte01Component
    },
    {
      path: 'reporte2', component:Reporte02Component
    },
    {
      path: 'reporte3', component:Reporte03Component
    },
    {
      path: 'reporte4', component:Reporte04Component
    }
  ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
