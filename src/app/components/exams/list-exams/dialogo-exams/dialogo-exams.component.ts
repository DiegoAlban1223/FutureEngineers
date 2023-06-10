import { Component, OnInit } from '@angular/core';
import { ExamsService } from 'src/app/services/exams.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-exams',
  templateUrl: './dialogo-exams.component.html',
  styleUrls: ['./dialogo-exams.component.css']
})
export class DialogoExamsComponent implements OnInit{
  constructor(private eS: ExamsService,
    private dialogRef: MatDialogRef<DialogoExamsComponent>) { }

  ngOnInit(): void {}
  confirmar(estado: boolean){
    this.eS.setConfirmDelete(estado);
    this.dialogRef.close();
  }
}
