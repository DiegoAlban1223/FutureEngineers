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
  //listaUsers: Users[] = []; //DESVINCULANDO ROOMS DE USER PARA IMPLEMENTAR SECURITY
  listaTutors: Tutors[] = [];

  idChatsSeleccionado: number = 0;
  //idUsersSeleccionado: number = 0; //DESVINCULANDO ROOMS DE USER PARA IMPLEMENTAR SECURITY
  status:boolean = false;
  idTutorsSeleccionado: number = 0;

  id: number=0;
  edicion: boolean=false;

  constructor(private rS: RoomsService,
    private router:Router,
    private route: ActivatedRoute,
    private cS: ChatsService,
    //private uS: UsersService, //DESVINCULANDO ROOMS DE USER PARA IMPLEMENTAR SECURITY
    private tS: tutorsService) { }

  ngOnInit(): void {
    this.cS.list().subscribe(data => {this.listaChats = data});
    //this.uS.list().subscribe(data => {this.listaUsers = data}); //DESVINCULANDO ROOMS DE USER PARA IMPLEMENTAR SECURITY
    this.tS.list().subscribe(data => {this.listaTutors = data});

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();  //traer el componente de abajo
      //this.idUsersSeleccionado = this.id;
    })

    this.form = new FormGroup({
      id: new FormControl(),
      codigo: new FormControl(),
      nombre: new FormControl(),
      cantidad_alumnos: new FormControl(),
      //Tutores_id: new FormControl(),
      //Tutores_User_user_id: new FormControl(),
      tutors:new FormControl(),
      status: new FormControl(),
      //Chats_id: new FormControl(),
      chats:new FormControl(),
      //users:new FormControl() //DESVINCULANDO ROOMS DE USER PARA IMPLEMENTAR SECURITY

      /*,
      Tutores_id: new FormControl()*/

    })
  }
  aceptar(): void {
    this.room.idRooms = this.form.value['id'];// SOLO AQUÍ SE LE COLOCA ID Y NO idRooms, a los demás SÍ
    this.room.codigo = this.form.value['codigo'];
    this.room.nombre = this.form.value['nombre'];
    this.room.cantidad_alumnos = this.form.value['cantidad_alumnos'];
    this.room.status = this.form.value['status'];
    this.room.tutor.especializacion=this.form.value['tutor.especializacion'];
    //this.room.user.rol = this.form.value['user.rol'] //DESVINCULANDO ROOMS DE USER PARA IMPLEMENTAR SECURITY
    //this.room.Chats_id.mensaje_tutor = this.form.value['chats.mensaje_tutor']
    this.room.chat.mensaje_tutor = this.form.value['chat.mensaje_tutor']

    if (    this.form.value['nombre'].length > 0 &&
    this.form.value['cantidad_alumnos'] && this.idChatsSeleccionado>0 && this.idTutorsSeleccionado>0) {

    if (this.edicion) {
      let c = new Chats();
      let t = new Tutors();
      c.idChats = this.idChatsSeleccionado;
      t.idTutors = this.idTutorsSeleccionado;
      this.room.chat=c;
      this.room.tutor = t;
      this.rS.goUpdate(this.room).subscribe((data) => {
        this.rS.list().subscribe((data) => {
          this.rS.setList(data);
        });
      });

    } else {
      let c = new Chats();
      let t = new Tutors();
      c.idChats = this.idChatsSeleccionado;
      t.idTutors = this.idTutorsSeleccionado;
      this.room.chat=c;
      this.room.tutor = t;
      this.rS.insert(this.room).subscribe((data) => {
      this.rS.list().subscribe((data) => {
            this.rS.setList(data);
        });
      });}
      this.router.navigate(['rooms']);
}else{
  this.mensaje="Ingrese los datos de la Sala";
}
}

 // para Modificar FALTA
 init() {
  if (this.edicion) {
    this.rS.listId(this.id).subscribe(data => {
      this.form = new FormGroup({
        id: new FormControl(data.idRooms),
        codigo: new FormControl(data.codigo),
        nombre: new FormControl(data.nombre),
        cantidad_alumnos: new FormControl(data.cantidad_alumnos),
        //Tutores_id: new FormControl(),
        //Tutores_User_user_id: new FormControl(),
        tutors:new FormControl(data.tutor.idTutors),
        status: new FormControl(this.status),
        //Chats_id: new FormControl(),
        chats:new FormControl(data.chat.idChats)
      })
    })
  }
}
}
