import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { roomsTutorsDTO } from 'src/app/model/roomsTutorsDTO';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-reporte03',
  templateUrl: './reporte03.component.html',
  styleUrls: ['./reporte03.component.css']
})
export class Reporte03Component {
  roomsCounts: roomsTutorsDTO[] = [];
  dataSource: MatTableDataSource<roomsTutorsDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['rooms','cantidad']

  constructor(private rS: RoomsService) { }

  ngOnInit(): void {
    this.rS.getcountRoomsByTutors().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getcountRoomsByTutors(): void {
    this.rS.getcountRoomsByTutors()
      .subscribe((data: roomsTutorsDTO[]) => {
        this.roomsCounts = data;
      });
  }
}
