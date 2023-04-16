import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/model/students';
import { StudentsService } from 'src/app/service/students.service';
import { MatTableDataSource } from '@angular/material/table'
@Component({
  selector: 'app-students-listar',
  templateUrl: './students-listar.component.html',
  styleUrls: ['./students-listar.component.css']
})
export class StudentsListarComponent implements OnInit {

  dataSource:MatTableDataSource<Students>=new MatTableDataSource();
  displayedColumns:string[]=['id','colegio','edad','user_id','membresia','sala_id']
  constructor(private sS:StudentsService) { }

  ngOnInit(): void {
    this.sS.list().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
