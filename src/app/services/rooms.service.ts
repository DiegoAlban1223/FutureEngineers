import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Rooms } from '../model/rooms';
const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  private url = `${base_url}/rooms`
  private listaCambio = new Subject<Rooms[]>()
  private confirmarEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  list(){
    return this.http.get<Rooms[]>(this.url);
  }

  insert(rooms:Rooms){
    return this.http.post(this.url, rooms);
  }

  setList(ListaNueva: Rooms[]){
    this.listaCambio.next(ListaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  //modificar put
  listId(idRooms: number) {
    return this.http.get<Rooms>(`${this.url}/${idRooms}`);

  }

  update(ro: Rooms) {
    //return this.http.put(this.url + "/" + p.idRooms, p);
    return this.http.put(this.url, ro);
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
