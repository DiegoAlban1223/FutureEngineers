import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { professionsSimulationDTO } from 'src/app/model/professionsSimulationDTO';
import { SimulationsService } from 'src/app/services/simulations.service';

@Component({
  selector: 'app-reporte01',
  templateUrl: './reporte01.component.html',
  styleUrls: ['./reporte01.component.css']
})
export class Reporte01Component implements OnInit{

  simulationsCounts: professionsSimulationDTO[]=[];
  dataSource: MatTableDataSource<professionsSimulationDTO>= new MatTableDataSource();

  displayedColumns: string[]=['professions', 'cantidad']

  constructor(private sS:SimulationsService){}

  ngOnInit(): void {
      this.sS.getSimulationsCountByProfessions().subscribe(data => {
        this.dataSource=new MatTableDataSource(data);
      })
  }

  getSimulationsCountByProfessions(): void{
    this.sS.getSimulationsCountByProfessions()
    .subscribe((data: professionsSimulationDTO[])=> {
      this.simulationsCounts = data;
    });
  }
}