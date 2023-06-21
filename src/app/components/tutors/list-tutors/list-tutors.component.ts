import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tutors } from 'src/app/model/tutors';
import { tutorsService } from 'src/app/services/tutors.service';
import { DialogoTutorsComponent } from './dialogo-tutors/dialogo-tutors.component';

@Component({
  selector: 'app-list-tutors',
  templateUrl: './list-tutors.component.html',
  styleUrls: ['./list-tutors.component.css']
})
export class ListTutorsComponent implements OnInit {

  dataSource:MatTableDataSource<Tutors>=new MatTableDataSource();
  //displayedColumns:string[]=['id','especializacion','usuario', 'accions1', 'accions2']
  //displayedColumns:string[]=['id','especializacion','usuario']
  displayedColumns:string[]=['id','especializacion','usuario','nombre_completo','correo_electronico', 'accions1', 'accions2']
  lista: Tutors[]=[];
  idMayor: number=0
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  constructor(private tS:tutorsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.tS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })
    this.tS.getList().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
  })
  this.tS.getConfirmDelete().subscribe(data => {
    data == true ? this.eliminar(this.idMayor) : false;
  })
  }

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(DialogoTutorsComponent);
  }

  eliminar(id: number) {
    this.tS.delete(id).subscribe(() => {
      this.tS.list().subscribe(data => {
        this.tS.setList(data);
      })
    })
  }

  filtrar(z:any){
    this.dataSource.filter = z.target.value.trim();
  }
}
