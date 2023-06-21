import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator';
import { Rooms } from 'src/app/model/rooms';
import { RoomsService } from 'src/app/services/rooms.service';
import { DialogoRoomsComponent } from './dialogo-rooms/dialogo-rooms.component';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.css']
})
export class ListRoomsComponent implements OnInit {

  lista: Rooms[] = [];
  dataSource:MatTableDataSource<Rooms> = new MatTableDataSource();
  //displayedColumns: string[] = ['id','Codigo','Nombre', 'Cantidad_alumnos', 'Tutores_id', 'Tutores_User_user_id','status','Chats_id', 'accions1', 'accions2'];
  displayedColumns: string[] = ['id','Codigo','Nombre', 'Cantidad_alumnos', 'Tutores_id','status','Chats_id', 'accions1', 'accions2']; //DESVINCULANDO ROOMS DE USER PARA IMPLEMENTAR SECURITY
  idMayor: number = 0;
  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;

  constructor(private rS: RoomsService, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.rS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })

    this.rS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })

    //eliminar
    this.rS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(DialogoRoomsComponent);
  }

  eliminar(id: number) {
    this.rS.delete(id).subscribe(() => {
      this.rS.list().subscribe(data => {
        this.rS.setList(data);
      })
    })
  }


  filtrar(z: any) {
    this.dataSource.filter = z.target.value.trim();
  }

}
