import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Students } from '../model/students';
const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private url = `${base_url}/students`

  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Students[]>(this.url);
  }
}
