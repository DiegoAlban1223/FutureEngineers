import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Chats } from '../model/Chats';
const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  private url = `${base_url}/Chats`;
  constructor(private http:HttpClient) {}

  list(){
    return this.http.get<Chats[]>(this.url);
  }
}
