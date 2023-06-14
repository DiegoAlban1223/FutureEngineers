import { Users } from "./Users"
import { Memberships } from "./memberships"
import { Rooms } from "./rooms"

export class Students {
  idStudents:number=0
  colegio:string=""
  edad:number=0
  users_user_id:Users= new Users()
  memberships_id: Memberships= new Memberships()
  rooms_id: Rooms= new Rooms()
}
