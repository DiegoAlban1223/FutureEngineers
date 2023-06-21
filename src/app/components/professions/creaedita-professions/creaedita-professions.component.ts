import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Professions } from 'src/app/model/Professions';
import { ProfessionsService } from 'src/app/services/professions.service';

@Component({
  selector: 'app-creaedita-professions',
  templateUrl: './creaedita-professions.component.html',
  styleUrls: ['./creaedita-professions.component.css']
})
export class CreaeditaProfessionsComponent implements OnInit{

  id: number=0;
  edicion: boolean=false;
  form: FormGroup = new FormGroup({});
  profession: Professions = new Professions();
  mensaje: string = "";

  constructor(private pS: ProfessionsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      informacion: new FormControl(),
      duracion: new FormControl(),
      campo_laboral: new FormControl(),
      simulation: new FormControl(),
      tests: new FormControl()
    })

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init(); 
    })
  }

  aceptar(): void {
    this.profession.idProfessions = this.form.value['id'];
    this.profession.nombre = this.form.value['nombre'];
    this.profession.informacion = this.form.value['informacion'];
    this.profession.duracion = this.form.value['duracion'];
    this.profession.campo_laboral = this.form.value['campo_laboral'];
    this.profession.simulation= this.form.value['simulation'];
    this.profession.tests= this.form.value['tests']

    if (this.form.value['nombre'].length > 0 && this.form.value['informacion'].length > 0
      && this.form.value['duracion'].length > 0 && this.form.value['campo_laboral'].length > 0 
      && this.form.value['simulation'] && this.form.value['tests']) {
      if(this.edicion){
        this.pS.goUpdate(this.profession).subscribe(()=>{
          this.pS.list().subscribe(data => {
          this.pS.setList(data)})
        })
      }else{     
        this.pS.insert(this.profession).subscribe(data => {
        this.pS.list().subscribe(data => {
          this.pS.setList(data)
        })
      })
    }
      this.router.navigate(['professions']);

    } else {
      this.mensaje = "Ingrese los datos de la profesión!!"
    }
  }
  // para Modificar
  init() {
    if (this.edicion) {
      this.pS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.idProfessions),
          nameCurso: new FormControl(data.nombre),
          informacion: new FormControl(data.informacion),
          duracion: new FormControl(data.duracion),
          campo_laboral: new FormControl(data.campo_laboral),
          simulation: new FormControl(data.simulation),
          tests: new FormControl(data.tests)
        })
      })
    }
  }
}
