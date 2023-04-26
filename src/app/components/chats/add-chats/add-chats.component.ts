import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Chats } from 'src/app/model/Chats';
import * as moment from 'moment';
import { ChatsService } from 'src/app/services/chats.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-chats',
  templateUrl: './add-chats.component.html',
  styleUrls: ['./add-chats.component.css']
})
export class AddChatsComponent implements OnInit {
  form:FormGroup = new FormGroup({});
  chats: Chats = new Chats();
  mensaje:string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();
  //maxFecha = new Date();
  id: number = 0;
  edicion: boolean = false;

  ngOnInit(): void {//author-cheaedita.component.ts
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    })
    this.form = new FormGroup({
      id: new FormControl(),
      mensaje_estudiante: new FormControl(),
      mensaje_tutor: new FormControl(),
      fecha_envio: new FormControl(),
      fecha_recepcion: new FormControl()
    })
  }

  constructor(private aS: ChatsService, private router: Router, private route: ActivatedRoute) { }

  aceptar():void{
    const now = moment();
    this.chats.id=this.form.value['id'];
    this.chats.mensaje_estudiante=this.form.value['mensaje_estudiante'];
    this.chats.mensaje_tutor = this.form.value['mensaje_tutor'];
    //this.chats.fecha_envio = this.form.value['fecha_envio'];
    this.chats.fecha_envio = moment().toDate();
    //this.chats.fecha_recepcion = this.form.value['fecha_recepcion'];
    this.chats.fecha_recepcion = moment().toDate();
    if(this.form.value['mensaje_estudiante'].length > 0 && this.form.value['mensaje_tutor']){
      if (this.edicion) {
        this.aS.update(this.chats).subscribe((data) => {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      } else {
        this.aS.insert(this.chats).subscribe((data)=> {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      }

      this.router.navigate(['chats']);

    }else{
      this.mensaje = "ingrese los datos del chat"
    }
  }

  init() {
    if (this.edicion) {
      this.aS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          // nameAuthor: new FormControl(data.nameAuthor),
          // emailAuthor: new FormControl(data.emailAuthor),
          // birthDateAuthor: new FormControl(data.birthDateAuthor),
          mensaje_estudiante: new FormControl(data.mensaje_estudiante),
          mensaje_tutor: new FormControl(data.mensaje_tutor),
          fecha_envio: new FormControl(data.fecha_envio),
          fecha_recepcion: new FormControl(data.fecha_recepcion)
        })
      })
    }
  }
}
