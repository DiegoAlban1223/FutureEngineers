import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator';
import { DialogoExamsComponent } from './dialogo-exams/dialogo-exams.component';
import { Exams } from 'src/app/model/Exams';
import { ExamsService } from 'src/app/services/exams.service';

@Component({
  selector: 'app-list-exams',
  templateUrl: './list-exams.component.html',
  styleUrls: ['./list-exams.component.css']
})
export class ListExamsComponent implements OnInit{
  lista: Exams[] = [];
  dataSource: MatTableDataSource<Exams> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'cantidadP', 'preguntaE', 'respuestaE', 'calificacion', 'simulation', 'accions1', 'accions2'];
  //eliminar
  idMayor: number = 0;
  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;

  constructor(private es: ExamsService, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.es.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })

    this.es.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })

    //eliminar
    this.es.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(DialogoExamsComponent);
  }

  eliminar(id: number) {
    this.es.delete(id).subscribe(() => {
      this.es.list().subscribe(data => {
        this.es.setList(data);
      })
    })
  }


  filtrar(z: any) {
    this.dataSource.filter = z.target.value.trim();
  }
}
