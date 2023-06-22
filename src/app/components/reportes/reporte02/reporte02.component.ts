import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { roomsTutorsDTO } from 'src/app/model/roomsTutorsDTO';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-reporte02',
  templateUrl: './reporte02.component.html',
  styleUrls: ['./reporte02.component.css']
})
export class Reporte02Component implements OnInit{

  roomsCounts: roomsTutorsDTO[]=[];
  dataSource: MatTableDataSource<roomsTutorsDTO>= new MatTableDataSource();

  displayedColumns: string[]=['tutors','cantidad']

  constructor(private rS: RoomsService){}

  ngOnInit(): void {
   this.rS.getRoomsCountByTutors().subscribe(data =>{
    this.dataSource= new MatTableDataSource(data);
   })
  }

  getRoomsCountByTutors(): void{
    this.rS.getRoomsCountByTutors()
    .subscribe((data: roomsTutorsDTO[])=>{
      this.roomsCounts = data;
    })
  }
}
