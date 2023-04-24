import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
//import * as moment from 'moment'
import { Users } from 'src/app/model/Users';
import { from } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-creaedita-users',
  templateUrl: './creaedita-users.component.html',
  styleUrls: ['./creaedita-users.component.css']
})
export class CreaeditaUsersComponent implements OnInit {

  id: number = 0
  edicion: boolean=false

  from:FormGroup= new FormGroup({});
  user:Users= new Users();
  mensaje:string="";


  ngOnInit(): void {
    this.from = new FormGroup({
      id: new FormControl(),
      rol: new FormControl(),
      nombre_completo: new FormControl(),
      correo_electronico: new FormControl(),
      contrasena: new FormControl()
    })
  }

  constructor(private as:UsersService,
    private router:Router,
    private route:ActivatedRoute) { }

  aceptar():void{
    this.user.id=this.from.value['id'];
    this.user.rol=this.from.value['rol'];
    this.user.nombre_completo=this.from.value['nombre_completo'];
    this.user.correo_electronico=this.from.value['correo_electronico'];
    this.user.contrasena=this.from.value['contrasena'];

    if(this.from.value['nombre_completo'].length > 0 && this.from.value['correo_electronico'].length > 0){
      if(this.edicion){
        this.as.update(this.user).subscribe(()=>{
          this.as.list().subscribe(data=>{
            this.as.setList(data)})
        })
      }
      else{
            +this.as.insert(this.user).subscribe(data=>{
              this.as.list().subscribe(data=>{
                this.as.setList(data)})})
      }
      this.router.navigate(['users']);
    }
    else{
      this.mensaje = "Ingrese los datos del author!!"
    }
  }
  init(){

    if(this.edicion){
      this.as.listId(this.id).subscribe(data=>{
          this.from = new FormGroup({
            id: new FormControl(data.id),
            rol: new  FormControl(data.rol),
            nombre_completo: new FormControl(data.nombre_completo),
            correo_electronico: new FormControl(data.correo_electronico),
            contrasena: new FormControl(data.contrasena)
          })
      })
    }
  }
}
