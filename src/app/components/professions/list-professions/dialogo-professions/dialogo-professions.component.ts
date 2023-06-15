import { Component, OnInit } from '@angular/core';
import { ProfessionsService } from 'src/app/services/professions.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-professions',
  templateUrl: './dialogo-professions.component.html',
  styleUrls: ['./dialogo-professions.component.css']
})
export class DialogoProfessionsComponent implements OnInit{
  constructor(private aS: ProfessionsService,
    private dialogRef: MatDialogRef<DialogoProfessionsComponent>) { }

  ngOnInit(): void {}
  confirmar(estado: boolean){
    this.aS.setConfirmDelete(estado);
    this.dialogRef.close();
  }
}
