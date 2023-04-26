import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Simulations } from 'src/app/model/simulations';
import { MatDialog } from '@angular/material/dialog'
import { SimulationDialogoComponent } from './simulation-dialogo/simulation-dialogo.component';
import { SimulationsService } from 'src/app/services/simulations.service';

@Component({
  selector: 'app-simulation-listar',
  templateUrl: './simulation-listar.component.html',
  styleUrls: ['./simulation-listar.component.css']
})
export class SimulationListarComponent implements OnInit {

  lista: Simulations[] = []
  dataSource: MatTableDataSource<Simulations> = new MatTableDataSource();
  displayedColumns: string[] = ['codigoC', 'nombreC', 'planC', 'metodologiaC', 'duracionC', 'accions1', 'accions2']
  //eliminar
  idMayor: number = 0
  constructor(private as: SimulationsService, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.as.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.as.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    //eliminar
    this.as.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(SimulationDialogoComponent);
  }

  eliminar(id: number) {
    this.as.delete(id).subscribe(() => {
      this.as.list().subscribe(data => {
        this.as.setList(data);
      })
    })
  }


  filtrar(z: any) {
    this.dataSource.filter = z.target.value.trim();
  }
}
