import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Simulations } from 'src/app/model/simulations';
import { SimulationsService } from 'src/app/services/simulations.service';

@Component({
  selector: 'app-simulation-listar',
  templateUrl: './simulation-listar.component.html',
  styleUrls: ['./simulation-listar.component.css']
})
export class SimulationListarComponent implements OnInit {

  dataSource: MatTableDataSource<Simulations> = new MatTableDataSource();
  displayedColumns: string[] = ['codigoC', 'nombreC', 'planC', 'metodologiaC', 'duracionC']

  constructor(private as: SimulationsService) { }

  ngOnInit(): void {

    this.as.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.as.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
