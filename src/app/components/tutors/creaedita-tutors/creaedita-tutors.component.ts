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
  //lista: Users[] = [];//DESVINCULANDO TUTORS DE USER PARA IMPLEMENTAR SECURITY
  idUsersSeleccionado:number = 0;

  constructor(private tS: tutorsService,
    private router: Router,
    private route: ActivatedRoute,
    private uS:UsersService) { }


  ngOnInit(): void {
    //this.uS.list().subscribe(data => { this.lista = data });//DESVINCULANDO TUTORS DE USER PARA IMPLEMENTAR SECURITY

    this.form = new FormGroup({
      id: new FormControl(),
      especializacion: new FormControl(),
      //user: new FormControl(),//DESVINCULANDO TUTORS DE USER PARA IMPLEMENTAR SECURITY
      nombre_completo: new FormControl(),
      correo_electronico: new FormControl()
    })

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();  //traer el componente de abajo
      //this.idUsersSeleccionado = this.id;
    })
  }

  aceptar(): void {
    this.tutors.idTutors = this.form.value['id'];
    this.tutors.especializacion = this.form.value['especializacion'];
    //this.tutors.user.nombre_completo= this.form.value['user.nombre_completo']
    this.tutors.nombre_completo=this.form.value['nombre_completo'];
    this.tutors.correo_electronico=this.form.value['correo_electronico'];

    //if(this.idUsersSeleccionado>0){//DESVINCULANDO TUTORS DE USER PARA IMPLEMENTAR SECURITY
    //        let u = new Users();
    //        u.id_users = this.idUsersSeleccionado
    //        this.tutors.user =u;
    //       this.tS.insert(this.tutors).subscribe(() => {
    //        this.tS.list().subscribe(data => {
    //          this.tS.setList(data)
    //        })
    //      })
    //      this.router.navigate(['tutors']);
    //    }

    // if (this.form.value['especializacion'].length > 0) {
    //   if (this.edicion) {
    //     //this.idUsersSeleccionado=this.id;
    //     if(this.idUsersSeleccionado>0){
    //     let u = new Users();
    //     u.idUsers = this.idUsersSeleccionado
    //     this.tutors.user =u;
    //     this.tS.update(this.tutors).subscribe(() => {
    //       this.tS.list().subscribe((data) => {
    //         this.tS.setList(data);
    //       });
    //     });
    //     //this.router.navigate(['tutors']);
    //   }
    //   } else {
    //     if(this.idUsersSeleccionado>0){
    //       let u = new Users();
    //       u.idUsers = this.idUsersSeleccionado
    //       this.tutors.user =u;
    //      this.tS.insert(this.tutors).subscribe(() => {
    //       this.tS.list().subscribe(data => {
    //         this.tS.setList(data)
    //       })
    //     })
    //           //this.router.navigate(['tutors']);
    //   }
    //   }
    //   this.router.navigate(['tutors']);
    // } else {
    //   this.mensaje = 'ingrese los datos del tutor';
    // }
    if (
      this.form.value['especializacion'].length > 0 &&//DESVINCULANDO TUTORS DE USER PARA IMPLEMENTAR SECURITY
      this.form.value['nombre_completo'].length  > 0 && this.form.value['correo_electronico'].length  > 0
    ) {
      if (this.edicion) {
        this.tS.update(this.tutors).subscribe(() => {
          this.tS.list().subscribe((data) => {
            this.tS.setList(data);
          });
        });
      } else {
        this.tS.insert(this.tutors).subscribe((data) => {
          this.tS.list().subscribe((data) => {
            this.tS.setList(data);
          });
        });
      }
      this.router.navigate(['tutors']);
    } else {
      this.mensaje = 'ingrese los datos del tutor';
    }
}
  // para Modificar
  init() {
    if (this.edicion) {
      this.tS.listId(this.id).subscribe(data => {
        //this.idUsersSeleccionado = this.id;
        this.form = new FormGroup({
          id: new FormControl(data. idTutors),//acá tiene que ser id para que modifique
          especializacion: new FormControl(data.especializacion),
          //user: new FormControl(data.user.idUsers),//DESVINCULANDO TUTORS DE USER PARA IMPLEMENTAR SECURITY
          nombre_completo: new FormControl(data.nombre_completo),
          correo_electronico: new FormControl(data.correo_electronico)
        })
      })
    }
  }

}


