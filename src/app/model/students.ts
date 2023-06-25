import { Users } from "./Users"
import { Memberships } from "./memberships"
import { Rooms } from "./rooms"

export class Students {
  idStudents:number=0
  colegio:string=""
  edad:number=0
  nombre_completo:string=""
  correo_electronico:string=""
  //users_user_id:Users= new Users()
  memberships: Memberships= new Memberships()
  //rooms_id: Rooms= new Rooms()
}
