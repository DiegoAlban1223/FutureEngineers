import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Simulations } from 'src/app/model/simulations';
import { SimulationsService } from 'src/app/services/simulations.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Professions } from 'src/app/model/Professions';
import { ProfessionsService } from 'src/app/services/professions.service';

@Component({
  selector: 'app-simulation-creaedita',
  templateUrl: './simulation-creaedita.component.html',
  styleUrls: ['./simulation-creaedita.component.css']
})
export class SimulationCreaeditaComponent implements OnInit {

  id: number=0;
  edicion: boolean=false;
  form: FormGroup = new FormGroup({});
  simulation: Simulations = new Simulations();
  mensaje: string = "";
  listaProfessions: Professions[] = [];
  idProfessionsSelecionado:number = 0;

  constructor(private aS: SimulationsService,
    private pS: ProfessionsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.pS.list().subscribe((data)=> {
      this.listaProfessions = data;
  });

    this.form = new FormGroup({
      id: new FormControl(),
      name_curso: new FormControl(),
      plan_curso: new FormControl(),
      metodologia_curso: new FormControl(),
      duracion_horas: new FormControl(),
      professions: new FormControl()
    })

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();  //traer el componente de abajo
    })
  }

  aceptar(): void {
    this.simulation.idSimulations = this.form.value['id'];
    this.simulation.name_curso = this.form.value['name_curso'];
    this.simulation.plan_curso = this.form.value['plan_curso'];
    this.simulation.metodologia_curso = this.form.value['metodologia_curso'];
    this.simulation.duracion_horas = this.form.value['duracion_horas'];
    this.simulation.professions.nombre = this.form.value['professions.nombre']

    if(this.idProfessionsSelecionado > 0){
        let p = new Professions();
        p.idProfessions = this.idProfessionsSelecionado;
        this.simulation.professions = p;

        this.aS.insert(this.simulation).subscribe(data => {
        this.aS.list().subscribe(data => {
          this.aS.setList(data)
        })
      })
      this.router.navigate(['simulations']);
    }
      
    if (this.form.value['name_curso'] && this.form.value['plan_curso'] && this.form.value['metodologia_curso'] && this.form.value['duracion_horas']) {
      if(this.edicion){
        this.aS.update(this.simulation).subscribe(()=>{
          this.aS.list().subscribe(data => {
          this.aS.setList(data)})
      });
      }      
        this.router.navigate(['simulations']);
    } else {
      this.mensaje = "Ingrese los datos de la simulación!!"
    }
  }
  // para Modificar
  init() {
    if (this.edicion) {
      this.aS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.idSimulations),
          name_curso: new FormControl(data.name_curso),
          plan_curso: new FormControl(data.plan_curso),
          metodologia_curso: new FormControl(data.metodologia_curso),
          duracion_horas: new FormControl(data.duracion_horas),
          professions:new FormControl(data.professions.idProfessions)
        })
      })
    }
  }
}
