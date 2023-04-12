import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Chats } from 'src/app/model/Chats';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})

export class ListChatsComponent implements OnInit {
  dataSource1:MatTableDataSource<Chats>=new MatTableDataSource();//creo q  no se instalo bien el angular material

  displayedColumns:String[]=['Codigo','rol','nombre_completo','correo_electronico','contrasena']
  constructor(private as:ChatsService) { }

  ngOnInit(): void {
    this.as.list().subscribe(data=>{
      this.dataSource1=new MatTableDataSource(data);
    })
  }
}
