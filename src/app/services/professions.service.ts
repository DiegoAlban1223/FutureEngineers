import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Professions } from '../model/Professions';

const base_url= environment.base
@Injectable({
  providedIn: 'root'
})
export class ProfessionsService {

  private url=`${base_url}/professions`
  private listaCambio= new Subject<Professions[]>();
  private confirmarEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Professions[]>(this.url);
  }

  insert(professions:Professions){
    return this.http.post(this.url, professions);
  }

  setList(ListaNueva: Professions[]){
    this.listaCambio.next(ListaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  //modificar put
  listId(idProfessions: number) {
    return this.http.get<Professions>(`${this.url}/${idProfessions}`);
  }

  goUpdate(p: Professions) {
    return this.http.put(this.url + "/" + p.idProfessions, p);
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
