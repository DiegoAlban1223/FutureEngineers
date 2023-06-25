import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Memberships } from 'src/app/model/memberships';
import { Students } from 'src/app/model/students';
import { MembershipsService } from 'src/app/services/memberships.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-creaedita',
  templateUrl: './student-creaedita.component.html',
  styleUrls: ['./student-creaedita.component.css']
})
export class StudentCreaeditaComponent implements OnInit {

  id: number=0;
  edicion: boolean=false;
  form: FormGroup = new FormGroup({});
  student: Students = new Students();
  mensaje: string = "";
  listaMemberships: Memberships[] = [];
  idMembershipsSelecionado:number = 0;

  constructor(private aS: StudentService,
    private mS: MembershipsService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.mS.list().subscribe((data)=> {
      this.listaMemberships = data;
  });

    this.form = new FormGroup({
      idStudents: new FormControl(),
      colegio: new FormControl(),
      edad: new FormControl(),
      //users_user_id: new FormControl(),
      memberships: new FormControl(),
      //rooms_id: new FormControl(),
      nombre_completo: new FormControl(),
      correo_electronico: new FormControl(),
    })

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();  //traer el componente de abajo
    })
  }

  aceptar(): void {
    this.student.idStudents = this.form.value['id'];
    this.student.colegio = this.form.value['colegio'];
    this.student.edad = this.form.value['edad'];
    //this.student.users_user_id = this.form.value['users_user_id'];
    this.student.memberships.beneficios = this.form.value['memberships.beneficios'];
    //this.student.room = this.form.value['rooms_id'];
    this.student.nombre_completo=this.form.value['nombre_completo'];
    this.student.correo_electronico=this.form.value['correo_electronico'];

    if (this.form.value['colegio'] && this.form.value['edad'] &&
    this.form.value['nombre_completo']&& this.form.value['correo_electronico']) {
      if(this.idMembershipsSelecionado > 0){
        let m = new Memberships();
        m.idMemberships = this.idMembershipsSelecionado;
        this.student.memberships = m;

        if(this.edicion){
        this.aS.goUpdate(this.student).subscribe(()=>{
          this.aS.list().subscribe(data => {
          this.aS.setList(data)})
        })
      }else{
        this.aS.insert(this.student).subscribe(data => {
        this.aS.list().subscribe(data => {
          this.aS.setList(data)
        })
      })
    }
      this.router.navigate(['students']);
  }
    } else {
      this.mensaje = "Ingrese los datos !"
    }

  }
  // para Modificar
  init() {
    if (this.edicion) {
      this.aS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          idStudents: new FormControl(data.idStudents),
          colegio: new FormControl(data.colegio),
          edad: new FormControl(data.edad),
          nombre_completo: new FormControl(data.nombre_completo),
          correo_electronico: new FormControl(data.correo_electronico),
          //users_user_id: new FormControl(data.users_user_id),
          memberships: new FormControl(data.memberships.idMemberships),
          //rooms_id: new FormControl(data.rooms_id)
        })
      })
    }
  }
}
