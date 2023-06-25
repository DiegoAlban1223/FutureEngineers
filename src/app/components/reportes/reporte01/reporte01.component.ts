import { Component, OnInit } from '@angular/core';
import { professionsSimulationDTO } from 'src/app/model/professionsSimulationDTO';
import { SimulationsService } from 'src/app/services/simulations.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reporte01',
  templateUrl: './reporte01.component.html',
  styleUrls: ['./reporte01.component.css']
})
export class Reporte01Component implements OnInit{
  simulationCounts: professionsSimulationDTO[] = [];
  dataSource: MatTableDataSource<professionsSimulationDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['profession','cantidad']

  constructor(private sS: SimulationsService) { }

  ngOnInit(): void {
    this.sS.getcountSimulationByProfession().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getcountSimulationByProfession(): void {
    this.sS.getcountSimulationByProfession()
      .subscribe((data: professionsSimulationDTO[]) => {
        this.simulationCounts = data;
      });
  }
}
