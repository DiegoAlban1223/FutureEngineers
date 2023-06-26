import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { studentsMembershipsDTO } from 'src/app/model/studentsMembershipDTO';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-reporte04',
  templateUrl: './reporte04.component.html',
  styleUrls: ['./reporte04.component.css']
})
export class Reporte04Component {
  studentCounts: studentsMembershipsDTO[] = [];
  dataSource: MatTableDataSource<studentsMembershipsDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['student','cantidad']

  constructor(private sS: StudentService) { }

  ngOnInit(): void {
    this.sS.getCountStudentsByMemberships().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getCountStudentsByMemberships(): void {
    this.sS.getCountStudentsByMemberships()
      .subscribe((data: studentsMembershipsDTO[]) => {
        this.studentCounts = data;
      });
  }
}
