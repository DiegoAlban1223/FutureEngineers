import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professions',
  templateUrl: './professions.component.html',
  styleUrls: ['./professions.component.css']
})
export class ProfessionsComponent implements OnInit{

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }
}
