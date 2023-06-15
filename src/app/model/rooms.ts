import { Chats } from "./Chats"
import { Tutors } from "./tutors"
import { Users } from "./Users"


export class Rooms{
  idRooms: number = 0
  codigo: number =0
  Nombre: string =""
  cantidad_alumnos: number =0
  Tutores_id: Tutors = new Tutors()//FOREING KAY DE TUTORS
  Tutores_User_user_id: Users = new Users()//FOREING KAY DE USERS
  status: boolean = false
  Chats_id: Chats = new Chats()//FOREING KAY DE TUTORS CHATS
}
