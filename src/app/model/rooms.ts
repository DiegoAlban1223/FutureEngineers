import { Chats } from "./Chats"
import { Tutors } from "./tutors"
import { Users } from "./Users"


export class Rooms{
  idRooms: number = 0
  codigo: number =0
  nombre: string =""
  cantidad_alumnos: number =0
  tutor: Tutors = new Tutors()//FOREING KAY DE TUTORS
  user: Users = new Users()//FOREING KAY DE USERS
  status: boolean = false
  chat: Chats = new Chats()//FOREING KAY DE TUTORS CHATS
}
