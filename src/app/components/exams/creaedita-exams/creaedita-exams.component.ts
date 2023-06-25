import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ExamsService } from 'src/app/services/exams.service';
import { Exams } from 'src/app/model/Exams';
import { Simulations } from 'src/app/model/simulations';
import { SimulationsService } from 'src/app/services/simulations.service';

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
  listaSimulation: Simulations[] = [];
  idSimulationSelecionado:number = 0;

  constructor(private eS: ExamsService,
    private sS: SimulationsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sS.list().subscribe((data)=> {
      this.listaSimulation = data;
  });

    this.form = new FormGroup({
      idExams: new FormControl(),
      cantidad_preguntas: new FormControl(),
      pregunta_exam: new FormControl(),
      respuesta_exam: new FormControl(),
      calificacion_exam: new FormControl(),
      simulation: new FormControl(),
    })

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    })
  }

  aceptar(): void {
    this.exam.idExams = this.form.value['id'];
    this.exam.cantidad_preguntas = this.form.value['cantidad_preguntas'];
    this.exam.pregunta_exam = this.form.value['pregunta_exam'];
    this.exam.respuesta_exam = this.form.value['respuesta_exam'];
    this.exam.calificacion_exam = this.form.value['calificacion_exam'];
    //this.exam.simulation.idSimulations= this.form.value['simulation.idSimulations']
    this.exam.simulation.name_curso= this.form.value['simulation.name_curso']

    if (this.form.value['cantidad_preguntas'] && this.form.value['pregunta_exam']
    && this.form.value['respuesta_exam'] && this.form.value['calificacion_exam'] && this.form.value['simulation']) {
      if(this.idSimulationSelecionado > 0){
        let s = new Simulations();
        s.idSimulations = this.idSimulationSelecionado;
        this.exam.simulation = s;
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
  }
    } else {
      this.mensaje = "Ingrese los datos del Examen!!"
    }
  }
  // para Modificar
  init() {
    if (this.edicion) {
      this.eS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          idExams: new FormControl(data.idExams),
          cantidad_preguntas: new FormControl(data.cantidad_preguntas),
          pregunta_exam: new FormControl(data.pregunta_exam),
          respuesta_exam: new FormControl(data.respuesta_exam),
          calificacion_exam: new FormControl(data.calificacion_exam),
          simulation: new FormControl(data.simulation.idSimulations)
        })
      })
    }
  }
}
