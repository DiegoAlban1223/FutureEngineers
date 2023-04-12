import { Simulations } from './../model/simulations';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class SimulationsService {

  private url=`${base_url}/simulations`

  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Simulations[]>(this.url);
  }
}
