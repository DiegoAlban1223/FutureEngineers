import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from '../model/Users';
const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = `${base_url}/Users`;
  constructor(private http:HttpClient) {}

  list(){
    return this.http.get<Users[]>(this.url);
  }
}
