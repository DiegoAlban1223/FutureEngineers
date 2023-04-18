import { Membership } from './../model/membership';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs'; //lista cambio 
import { environment } from 'src/environments/environment';
const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class MembershipService {
  private url = `${base_url}/membership`
  private listaCambio = new Subject<Membership[]>(); 

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Membership[]>(this.url);
  }

  insert(membership:Membership){
    return this.http.post(this.url, membership);
  }
  
  setList(ListaNueva: Membership[]) {
    this.listaCambio.next(ListaNueva)
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
