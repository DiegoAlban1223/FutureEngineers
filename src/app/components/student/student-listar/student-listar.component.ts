import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Students } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-listar',
  templateUrl: './student-listar.component.html',
  styleUrls: ['./student-listar.component.css']
})
export class StudentListarComponent implements OnInit {
  dataSource:MatTableDataSource<Students>=new MatTableDataSource();
  displayedColumns:string[]=['id','colegio','edad','membresia','sala_id', 'acciones']
  constructor(private sS:StudentService) { }

  ngOnInit(): void {
    this.sS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
    this.sS.getList().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
  })
}
filtrar(z:any){
  this.dataSource.filter = z.target.value.trim();
}
}

