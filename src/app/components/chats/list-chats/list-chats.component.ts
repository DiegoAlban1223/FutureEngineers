import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Chats } from 'src/app/model/Chats';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-list-chats',
  templateUrl: './list-chats.component.html',
  styleUrls: ['./list-chats.component.css']
})
export class ListChatsComponent implements OnInit {
  dataSource:MatTableDataSource<Chats>=new MatTableDataSource();//creo q  no se instalo bien el angular material

  displayedColumns:String[]=['Codigo','Mensajedelalumno','Mensajedeltutor','fechadeenvio','fechaderecepcion']
  constructor(private as:ChatsService) { }

  ngOnInit(): void {
    this.as.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }
}


