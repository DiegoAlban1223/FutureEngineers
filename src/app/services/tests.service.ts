import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Tests } from '../model/Tests';

const base_url= environment.base
@Injectable({
  providedIn: 'root'
})
export class TestsService {

  private url=`${base_url}/tests`
  private listaCambio= new Subject<Tests[]>();
  private confirmarEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Tests[]>(this.url);
  }

  insert(tests:Tests){
    return this.http.post(this.url, tests);
  }

  setList(ListaNueva: Tests[]){
    this.listaCambio.next(ListaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  //modificar put
  listId(id: number) {
    return this.http.get<Tests>(`${this.url}/${id}`);
  }

  update(t: Tests) {
    return this.http.put(this.url, t);
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
