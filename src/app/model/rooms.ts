import { Chats } from "./Chats"
import { Students } from "./students"
import { Tutors } from "./tutors"
import { Users } from "./Users"


export class Rooms{
  idRooms: number = 0
  codigo: number =0
  nombre: string =""
  cantidad_alumnos: number =0
  tutor: Tutors = new Tutors()//FOREING KAY DE TUTORS
  //user: Users = new Users()//FOREING KAY DE USERS  //DESVINCULANDO ROOMS DE USER PARA IMPLEMENTAR SECURITY
  //status: boolean = false
  chat: Chats = new Chats()//FOREING KAY DE TUTORS CHATS
  student: Students = new Students()
}
