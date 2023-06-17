import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Users } from 'src/app/model/Users';
import { Tutors } from 'src/app/model/tutors';
import { tutorsService } from 'src/app/services/tutors.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-creaedita-tutors',
  templateUrl: './creaedita-tutors.component.html',
  styleUrls: ['./creaedita-tutors.component.css']
})
export class CreaeditaTutorsComponent implements OnInit {

  id: number=0;
  edicion: boolean=false;
  form: FormGroup = new FormGroup({});
  tutors: Tutors = new Tutors();
  mensaje: string = "";
  lista: Users[] = [];
  idUsersSeleccionado:number = 0;

  constructor(private tS: tutorsService,
    private router: Router,
    private route: ActivatedRoute,
    private uS:UsersService) { }


  ngOnInit(): void {
    this.uS.list().subscribe(data => { this.lista = data });

    this.form = new FormGroup({
      idTutors: new FormControl(),
      especializacion: new FormControl(),
      Users_user_id: new FormControl()
    })

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();  //traer el componente de abajo
    })
  }

  aceptar(): void {
    this.tutors.idTutors = this.form.value['idTutors'];
    this.tutors.especializacion = this.form.value['especializacion'];
    this.tutors.id_users.nombre_completo= this.form.value['id_users.nombre_completo']

    if(this.idUsersSeleccionado>0){
            let u = new Users();
            u.id_users = this.idUsersSeleccionado
            this.tutors.id_users =u;
            this.tS.insert(this.tutors).subscribe(data => {
            this.tS.list().subscribe(data => {
              this.tS.setList(data)
            })
          })
        }
          this.router.navigate(['tutors']);
    // if (this.form.value['especializacion'].length > 0 ) {
    //   if(this.edicion){
    //     this.tS.update(this.tutors).subscribe(()=>{
    //       this.tS.list().subscribe(data => {
    //       this.tS.setList(data)})
    //     })
    //   }else if(this.idUsersSeleccionado>0){
    //     let u = new Users();
    //     u.idUsers = this.idUsersSeleccionado
    //     this.tutors.Users_user_id =u;
    //     this.tS.insert(this.tutors).subscribe(data => {
    //     this.tS.list().subscribe(data => {
    //       this.tS.setList(data)
    //     })
    //   })
    // }
    //   this.router.navigate(['tutors']);

    // } else {
    //   this.mensaje = "Ingrese los datos !"
    // }
  }
  // para Modificar
  init() {
    if (this.edicion) {
      this.tS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          idTutors: new FormControl(data. idTutors),
          especializacion: new FormControl(data.especializacion),
          Users_user_id: new FormControl(data.id_users)
        })
      })
    }
  }
  }


