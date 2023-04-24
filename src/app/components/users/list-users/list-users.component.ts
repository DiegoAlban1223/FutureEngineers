import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/model/Users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})

export class ListUsersComponent implements OnInit {
  dataSource:MatTableDataSource<Users>=new MatTableDataSource();//creo q  no se instalo bien el angular material

  displayedColumns:String[]=['Codigo','rol','nombre_completo','correo_electronico','contrasena','editar']
  constructor(private as:UsersService) { }

  ngOnInit(): void {
    this.as.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
    this.as.getList().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
  })
}
filtrar(z:any){
  this.dataSource.filter = z.target.value.trim();
}
}
