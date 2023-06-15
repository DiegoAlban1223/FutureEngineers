import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-dialogo-rooms',
  templateUrl: './dialogo-rooms.component.html',
  styleUrls: ['./dialogo-rooms.component.css']
})
export class DialogoRoomsComponent implements OnInit {

  constructor(private rS: RoomsService,
    private dialogRef: MatDialogRef<DialogoRoomsComponent>) { }


    ngOnInit(): void {}
    confirmar(estado: boolean){
      this.rS.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}
