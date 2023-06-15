import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { tutorsService } from 'src/app/services/tutors.service';

@Component({
  selector: 'app-dialogo-tutors',
  templateUrl: './dialogo-tutors.component.html',
  styleUrls: ['./dialogo-tutors.component.css']
})
export class DialogoTutorsComponent implements OnInit {

  constructor(private tS: tutorsService,
    private dialogRef: MatDialogRef<DialogoTutorsComponent>) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean){
    this.tS.setConfirmDelete(estado);
    this.dialogRef.close();
  }
}
