import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-chats-dialogo',
  templateUrl: './chats-dialogo.component.html',
  styleUrls: ['./chats-dialogo.component.css']
})
export class ChatsDialogoComponent implements OnInit {

  constructor(private aS: ChatsService,
    private dialogRef: MatDialogRef<ChatsDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.aS.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}
