import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Simulations } from '../model/simulations';
import { HttpClient } from '@angular/common/http';

const base_url= environment.base

@Injectable({
  providedIn: 'root'
})
export class SimulationsService {

  private url=`${base_url}/simulations`
  private listaCambio= new Subject<Simulations[]>();

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Simulations[]>(this.url);
  }

  insert(simulation:Simulations){
    return this.http.post(this.url, simulation);
  }

  setList(ListaNueva: Simulations[]){
    this.listaCambio.next(ListaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }
}
