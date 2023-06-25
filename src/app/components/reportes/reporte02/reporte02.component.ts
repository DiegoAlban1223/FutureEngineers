import { Component, OnInit } from '@angular/core';
import { examsSimulationDTO } from 'src/app/model/examsSimulationDTO';
import { ExamsService } from 'src/app/services/exams.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reporte02',
  templateUrl: './reporte02.component.html',
  styleUrls: ['./reporte02.component.css']
})
export class Reporte02Component implements OnInit{
  
  examsCounts: examsSimulationDTO[] = [];
  dataSource: MatTableDataSource<examsSimulationDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['Simulacion','cantidad']

  constructor(private eS: ExamsService) { }

  ngOnInit(): void {
    this.eS.getExamsCountBySimulations().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getExamsCountBySimulations(): void {
    this.eS.getExamsCountBySimulations()
      .subscribe((data: examsSimulationDTO[]) => {
        this.examsCounts = data;
      });
  }

}
