import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from '../model/Users';
import { Subject } from 'rxjs';
const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = `${base_url}/Users`;

  private listaCambio = new Subject<Users[]>()
  constructor(private http:HttpClient) {}

  list(){
    return this.http.get<Users[]>(this.url);
  }
  insert(user:Users){
    return this.http.post(this.url, user);
  }
  setList(listaNueva:Users[]){
    this.listaCambio.next(listaNueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }

}
