import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Chats } from '../model/Chats';
import { Subject } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  private url = `${base_url}/Chats`;
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
}
