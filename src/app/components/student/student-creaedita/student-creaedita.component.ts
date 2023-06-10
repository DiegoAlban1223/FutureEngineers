import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Students } from 'src/app/model/students';
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

  constructor(private aS: StudentService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      idStudents: new FormControl(),
      colegio: new FormControl(),
      edad: new FormControl(),
      users_user_id: new FormControl(),
      memberships_id: new FormControl(),
      rooms_id: new FormControl(),
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
    this.student.users_user_id = this.form.value['users_user_id'];
    this.student.memberships_id = this.form.value['memberships_id'];
    this.student.rooms_id = this.form.value['rooms_id'];

    if (this.form.value['colegio'].length > 0 && this.form.value['edad'].length > 0
      && this.form.value['users_user_id'].length > 0 && this.form.value['memberships_id'].length > 0
      && this.form.value['rooms_id'].length > 0) {
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
          users_user_id: new FormControl(data.users_user_id),
          memberships_id: new FormControl(data.memberships_id),
          rooms_id: new FormControl(data.rooms_id)
        })
      })
    }
  }
}
