import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Simulations } from 'src/app/model/simulations';
import { SimulationsService } from 'src/app/service/simulations.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-simulation-creaedita',
  templateUrl: './simulation-creaedita.component.html',
  styleUrls: ['./simulation-creaedita.component.css']
})
export class SimulationCreaeditaComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  simulation: Simulations = new Simulations();
  mensaje: string = "";
 
  constructor(private aS:SimulationsService, private router:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      id:new FormControl(),
      nameCurso: new FormControl(),
      planCurso: new FormControl(),
      metodologiaCurso: new FormControl(),
      duracionHoras: new FormControl(),
    })
  }

  aceptar():void{
    this.simulation.id=this.form.value['id'];
    this.simulation.nameCurso=this.form.value['nameCurso'];
    this.simulation.planCurso=this.form.value['planCurso'];
    this.simulation.metodologiaCurso=this.form.value['metodologiaCurso'];
    this.simulation.duracionHoras=this.form.value['duracionHoras'];

    if(this.form.value['nameCurso'].length>0 && this.form.value['planCurso'].length>0
    && this.form.value['metodologiaCurso'].length>0 && this.form.value['duracionHoras']>0 ){
      this.aS.insert(this.simulation).subscribe(data=>{
        this.aS.list().subscribe(data=>{
          this.aS.setList(data)})
    })

    this.router.navigate(['simulations']);

    } else{
      this.mensaje="Ingrese los datos del autor!!"
    }
  }
}
