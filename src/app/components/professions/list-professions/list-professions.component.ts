import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator';
import { Professions } from 'src/app/model/Professions';
import { ProfessionsService } from 'src/app/services/professions.service';
import { DialogoProfessionsComponent } from './dialogo-professions/dialogo-professions.component';

@Component({
  selector: 'app-list-professions',
  templateUrl: './list-professions.component.html',
  styleUrls: ['./list-professions.component.css']
})
export class ListProfessionsComponent implements OnInit{

  lista: Professions[] = [];
  dataSource: MatTableDataSource<Professions> = new MatTableDataSource();
  //displayedColumns: string[] = ['id', 'nombre', 'informacion', 'duracion', 'campo_laboral','simulation','tests', 'accions1', 'accions2'];
  displayedColumns: string[] = ['id', 'nombre', 'informacion', 'duracion', 'campo_laboral', 'accions1', 'accions2'];
  idMayor: number = 0;
  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;

  constructor(private pS: ProfessionsService, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.pS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })

    this.pS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })

    //eliminar
    this.pS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(DialogoProfessionsComponent);
  }

  eliminar(id: number) {
    this.pS.delete(id).subscribe(() => {
      this.pS.list().subscribe(data => {
        this.pS.setList(data);
      })
    })
  }


  filtrar(z: any) {
    this.dataSource.filter = z.target.value.trim();
  }
}
