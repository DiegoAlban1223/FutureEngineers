import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Chats } from '../model/chats';
import { Subject } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  private url = `${base_url}/Chats`;
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Chats[]>();
  constructor(private http:HttpClient) {}

  list(){
    return this.http.get<Chats[]>(this.url);
  }
  insert(chats:Chats){
    return this.http.post(this.url,chats);
  }

  setList(listaNueva: Chats[]) {

    this.listaCambio.next(listaNueva);

  }

  getList(){
    return this.listaCambio.asObservable();
  }

  listId(idChats: number) {
    return this.http.get<Chats>(`${this.url}/${idChats}`);
  }

  update(aut: Chats) {
    return this.http.put(this.url + "/" + aut.idChats, aut);
  }

  //http- HttpClientModule: get-post-put-delete, hacer un cuadro comparativo

  delete(idChats: number) {
    return this.http.delete(`${this.url}/${idChats}`)
  }

  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }

}
