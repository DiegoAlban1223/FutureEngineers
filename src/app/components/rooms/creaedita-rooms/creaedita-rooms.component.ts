import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Rooms } from 'src/app/model/rooms';
import * as moment from 'moment';
import { Chats } from 'src/app/model/Chats';
import { Users } from 'src/app/model/Users';
import { Tutors } from 'src/app/model/tutors';
import { RoomsService } from 'src/app/services/rooms.service';
import { ChatsService } from 'src/app/services/chats.service';
import { UsersService } from 'src/app/services/users.service';
import { tutorsService } from 'src/app/services/tutors.service';

@Component({
  selector: 'app-creaedita-rooms',
  templateUrl: './creaedita-rooms.component.html',
  styleUrls: ['./creaedita-rooms.component.css']
})
export class CreaeditaRoomsComponent implements OnInit {
  form:FormGroup = new FormGroup({});
  room:Rooms = new Rooms()
  mensaje: string = ""
  maxFecha: Date = moment().add(-1, 'days').toDate();
  listaChats: Chats[] = [];
  listaUsers: Users[] = [];
  listaTutors: Tutors[] = [];

  idChatsSeleccionado: number = 0;
  idUsersSeleccionado: number = 0;
  status:boolean = false;
  idTutorsSeleccionado: number = 0;

  constructor(private rS: RoomsService,
    private router:Router,
    private route: ActivatedRoute,
    private cS: ChatsService,
    private uS: UsersService,
    private tS: tutorsService) { }

  ngOnInit(): void {
    this.cS.list().subscribe(data => {this.listaChats = data});
    this.uS.list().subscribe(data => {this.listaUsers = data});
    this.tS.list().subscribe(data => {this.listaTutors = data});

    this.form = new FormGroup({
      idRooms: new FormControl(),
      codigo: new FormControl(),
      Nombre: new FormControl(),
      cantidad_alumnos: new FormControl(),
      //Tutores_id: new FormControl(),
      //Tutores_User_user_id: new FormControl(),
      tutors:new FormControl(),
      status: new FormControl(this.status),
      //Chats_id: new FormControl(),
      chats:new FormControl(),
      users:new FormControl()

      /*,
      Tutores_id: new FormControl()*/

    })
  }
  aceptar(): void {
    this.room.idRooms = this.form.value['id'];
    this.room.codigo = this.form.value['Codigo'];
    this.room.nombre = this.form.value['Nombre'];
    this.room.cantidad_alumnos = this.form.value['Cantidad_alumnos'];
    this.room.status = this.form.value['status'];
    this.room.tutor.especializacion=this.form.value['tutor.especializacion'];
    this.room.user.rol = this.form.value['user.rol']
    //this.room.Chats_id.mensaje_tutor = this.form.value['chats.mensaje_tutor']
    this.room.chat.mensaje_tutor = this.form.value['chat.mensaje_tutor']

    if (this.idChatsSeleccionado>0 && this.idUsersSeleccionado>0 && this.idTutorsSeleccionado>0) {
      let c = new Chats();
      let u = new Users();
      let t = new Tutors();
      c.idChats = this.idChatsSeleccionado;
      u.idUsers = this.idUsersSeleccionado;
      t.idTutors = this.idTutorsSeleccionado;
      this.room.chat=c;
      this.room.user = u;
      this.room.tutor = t;
      this.rS.insert(this.room).subscribe(() => {
      this.rS.list().subscribe(data => {
            this.rS.setList(data);
          })
        })

      this.router.navigate(['rooms']);

  }
}
}
