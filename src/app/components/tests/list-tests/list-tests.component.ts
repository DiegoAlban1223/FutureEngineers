import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tests } from 'src/app/model/Tests';
import { TestsService } from 'src/app/services/tests.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog'
import { DialogoTestsComponent } from './dialogo-tests/dialogo-tests.component';

@Component({
  selector: 'app-list-tests',
  templateUrl: './list-tests.component.html',
  styleUrls: ['./list-tests.component.css']
})
export class ListTestsComponent implements OnInit{
  lista: Tests[] = [];
  dataSource: MatTableDataSource<Tests> = new MatTableDataSource();
  //displayedColumns: string[] = ['id', 'preguntas', 'respuestas', 'resultado', 'student', 'accions1', 'accions2'];
  displayedColumns: string[] = ['id', 'preguntas', 'respuestas', 'resultado', 'student','professions', 'accions1', 'accions2'];
  //eliminar
  idMayor: number = 0;
  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;

  constructor(private as: TestsService, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.as.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })

    this.as.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })

    //eliminar
    this.as.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(DialogoTestsComponent);
  }

  eliminar(id: number) {
    this.as.delete(id).subscribe(() => {
      this.as.list().subscribe(data => {
        this.as.setList(data);
      })
    })
  }


  filtrar(z: any) {
    this.dataSource.filter = z.target.value.trim();
  }
}
