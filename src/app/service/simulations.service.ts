import { Simulations } from './../model/simulations';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs'; //lista cambio 
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class SimulationsService {

  private url = `${base_url}/simulations`
  private listaCambio = new Subject<Simulations[]>(); // se usa para 

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Simulations[]>(this.url);
  }

  insert(simulation:Simulations){
    return this.http.post(this.url, simulation);
  }
  
  setList(ListaNueva: Simulations[]) {
    this.listaCambio.next(ListaNueva)
  }

  getList() {
    return this.listaCambio.asObservable();
  }
}
