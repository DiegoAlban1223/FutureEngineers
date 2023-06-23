import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tests } from 'src/app/model/Tests';
import { Students } from 'src/app/model/students';
import { StudentService } from 'src/app/services/student.service';
import { TestsService } from 'src/app/services/tests.service';

@Component({
  selector: 'app-creaedita-tests',
  templateUrl: './creaedita-tests.component.html',
  styleUrls: ['./creaedita-tests.component.css']
})
export class CreaeditaTestsComponent implements OnInit {
  id: number=0;
  edicion: boolean=false;
  form: FormGroup = new FormGroup({});
  test: Tests = new Tests();
  mensaje: string = "";
  idStudentSelecionado: number=0;
  list: Students[]=[];

  constructor(private aS: TestsService,
    private router: Router,
    private route: ActivatedRoute,
    private sS: StudentService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      preguntas: new FormControl(),
      respuestas: new FormControl(),
      resultado: new FormControl(),
      students_id: new FormControl(),
    })

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init(); 
        
    })
  }

  aceptar(): void {
    this.test.idTests = this.form.value['id'];
    this.test.preguntas = this.form.value['preguntas'];
    this.test.respuestas = this.form.value['respuestas'];
    this.test.resultado = this.form.value['resultado'];
    this.test.students_id.nombre_completo = this.form.value['ID'];

    if (this.form.value['preguntas'].length > 0 && this.form.value['respuestas'].length > 0
      && this.form.value['resultado'].length > 0 && this.form.value['ID'].length > 0) {
      if(this.edicion){
        this.aS.update(this.test).subscribe(()=>{
          this.aS.list().subscribe(data => {
          this.aS.setList(data)})
        })
      }else{     
        this.aS.insert(this.test).subscribe(data => {
        this.aS.list().subscribe(data => {
          this.aS.setList(data)
        })
      })
    }
      this.router.navigate(['tests']);

    } else {
      this.mensaje = "Ingrese los datos de la tests!!"
    }
  }
 
  init() {
    if (this.edicion) {
      this.aS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.idTests),
          preguntas: new FormControl(data.preguntas),
          respuestas: new FormControl(data.respuestas),
          resultado: new FormControl(data.resultado),
          students_id: new FormControl(data.students_id)
        })
      })
    }
  }
}
