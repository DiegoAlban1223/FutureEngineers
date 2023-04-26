import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Students } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogoComponent } from './student-dialogo/student-dialogo.component';


@Component({
  selector: 'app-student-listar',
  templateUrl: './student-listar.component.html',
  styleUrls: ['./student-listar.component.css']
})
export class StudentListarComponent implements OnInit {
  dataSource:MatTableDataSource<Students>=new MatTableDataSource();
  displayedColumns:string[]=['id','colegio','edad','membresia','sala_id', 'acciones','acciones2']
//
  lista:Students[]=[]
  idMayor:number=0
  constructor(private sS:StudentService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.sS.list().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    })
    this.sS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    //
    this.sS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }

  //
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(StudentDialogoComponent);
  }
  eliminar(id: number) {
    this.sS.delete(id).subscribe(() => {
      this.sS.list().subscribe(data => {
        this.sS.setList(data);
      })
    })
  }
  filter(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}
