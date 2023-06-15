import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tutors } from 'src/app/model/tutors';
import { tutorsService } from 'src/app/services/tutors.service';

@Component({
  selector: 'app-creaedita-tutors',
  templateUrl: './creaedita-tutors.component.html',
  styleUrls: ['./creaedita-tutors.component.css']
})
export class CreaeditaTutorsComponent implements OnInit {

  id: number=0;
  edicion: boolean=false;
  form: FormGroup = new FormGroup({});
  student: Tutors = new Tutors();
  mensaje: string = "";

  constructor(private tS: tutorsService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.form = new FormGroup({
      idTutors: new FormControl(),
      especializacion: new FormControl()
    })

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();  //traer el componente de abajo
    })
  }

  aceptar(): void {
    this.student.idTutors = this.form.value['idTutors'];
    this.student.especializacion = this.form.value['especializacion']

    if (this.form.value['especializacion'].length > 0 ) {
      if(this.edicion){
        this.tS.goUpdate(this.student).subscribe(()=>{
          this.tS.list().subscribe(data => {
          this.tS.setList(data)})
        })
      }else{
        this.tS.insert(this.student).subscribe(data => {
        this.tS.list().subscribe(data => {
          this.tS.setList(data)
        })
      })
    }
      this.router.navigate(['tutors']);

    } else {
      this.mensaje = "Ingrese los datos !"
    }
  }
  // para Modificar
  init() {
    if (this.edicion) {
      this.tS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          idTutors: new FormControl(data. idTutors),
          especializacion: new FormControl(data.especializacion)
        })
      })
    }
  }
  }


