import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ExamsService } from 'src/app/services/exams.service';
import { Exams } from 'src/app/model/Exams';

@Component({
  selector: 'app-creaedita-exams',
  templateUrl: './creaedita-exams.component.html',
  styleUrls: ['./creaedita-exams.component.css']
})
export class CreaeditaExamsComponent implements OnInit{

  id: number=0;
  edicion: boolean=false;
  form: FormGroup = new FormGroup({});
  exam: Exams = new Exams();
  mensaje: string = "";

  constructor(private eS: ExamsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      idExams: new FormControl(),
      cantidadPreguntas: new FormControl(),
      preguntaExam: new FormControl(),
      respuestaExam: new FormControl(),
      calificacion: new FormControl(),
      simultaion: new FormControl(),
    })

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();  
    })
  }

  aceptar(): void {
    this.exam.idExams = this.form.value['id'];
    this.exam.cantidadPreguntas = this.form.value['cantidadP'];
    this.exam.preguntaExam = this.form.value['preguntaE'];
    this.exam.respuestaExam = this.form.value['respuestaE'];
    this.exam.calificacion = this.form.value['calificacion'];
    this.exam.simulation= this.form.value['simulation']
  
    if (this.form.value['cantidadP'].length > 0 && this.form.value['preguntaE'].length > 0
      && this.form.value['respuestaE'].length > 0 && this.form.value['calificacion'].length > 0 && this.form.value['simulation']) {
      if(this.edicion){
        this.eS.goUpdate(this.exam).subscribe(()=>{
          this.eS.list().subscribe(data => {
          this.eS.setList(data)})
        })
      }else{     
        this.eS.insert(this.exam).subscribe(data => {
        this.eS.list().subscribe(data => {
          this.eS.setList(data)
        })
      })
    }
      this.router.navigate(['exams']);

    } else {
      this.mensaje = "Ingrese los datos de la exams!!"
    }
  }
  // para Modificar
  init() {
    if (this.edicion) {
      this.eS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          idExams: new FormControl(data.idExams),
          cantidadPreguntas: new FormControl(data.cantidadPreguntas),
          preguntaExam: new FormControl(data.preguntaExam),
          respuestaExam: new FormControl(data.respuestaExam),
          calificacion: new FormControl(data.calificacion),
          simulation: new FormControl(data.simulation)
        })
      })
    }
  }
}
