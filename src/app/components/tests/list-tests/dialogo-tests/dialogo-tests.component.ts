import { Component, OnInit } from '@angular/core';
import { TestsService } from 'src/app/services/tests.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-tests',
  templateUrl: './dialogo-tests.component.html',
  styleUrls: ['./dialogo-tests.component.css']
})
export class DialogoTestsComponent implements OnInit{
  constructor(private tS: TestsService,
    private dialogRef: MatDialogRef<DialogoTestsComponent>) { }

  ngOnInit(): void {}
  confirmar(estado: boolean){
    this.tS.setConfirmDelete(estado);
    this.dialogRef.close();
  }
}
