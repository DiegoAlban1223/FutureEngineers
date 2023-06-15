import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Tutors } from '../model/tutors';
@Injectable({
  providedIn: 'root'
})
export class tutorsService {
  private url = `${environment.base}/tutors`
  private listaCambio= new Subject<Tutors[]>();
  private confirmarEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Tutors[]>(this.url);
  }

  insert(tutors:Tutors){
    return this.http.post(this.url, tutors)
  }

  setList(ListaNueva: Tutors[]){
    this.listaCambio.next(ListaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  //modificar put
  listId(id: number) {
    return this.http.get<Tutors>(`${this.url}/${id}`);
  }

  goUpdate(t: Tutors) {
    return this.http.put(this.url + "/" + t.idTutors, t);
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
