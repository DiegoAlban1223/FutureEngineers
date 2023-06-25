import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Exams } from '../model/Exams';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url= environment.base

@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  private url=`${base_url}/exams`
  private listaCambio= new Subject<Exams[]>();
  private confirmarEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Exams[]>(this.url);
  }

  insert(exams:Exams){
    return this.http.post(this.url, exams);
  }

  setList(ListaNueva: Exams[]){
    this.listaCambio.next(ListaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  //modificar put
  listId(idExams: number) {
    return this.http.get<Exams>(`${this.url}/${idExams}`);
  }

  goUpdate(e: Exams) {
    //return this.http.put(this.url + "/" + e.idExams, e);
    return this.http.put(this.url, e);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }

  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }
}
