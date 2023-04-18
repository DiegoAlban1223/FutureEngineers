import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Chats } from 'src/app/model/Chats';
import * as moment from 'moment';

@Component({
  selector: 'app-add-chats',
  templateUrl: './add-chats.component.html',
  styleUrls: ['./add-chats.component.css']
})
export class AddChatsComponent implements OnInit {
  form:FormGroup = new FormGroup({});
  chats: Chats = new Chats();
  mensaje:string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();

  ngOnInit(): void {
  }

  constructor() { }


}
