import { MembershipService } from './../../../service/membership.service';
import { Membership } from './../../../model/membership';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-membership-creaedita',
  templateUrl: './membership-creaedita.component.html',
  styleUrls: ['./membership-creaedita.component.css']
})
export class MembershipCreaeditaComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  membership: Membership = new Membership();
  mensaje: string = "";
 
  constructor(private aS:MembershipService, private router:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      id:new FormControl(),
      monto_pago: new FormControl(),
      beneficios: new FormControl(),
      metodos_de_pago: new FormControl()
    })
  }

  aceptar():void{
    this.membership.id=this.form.value['id'];
    this.membership.monto_pago=this.form.value['monto_pago'];
    this.membership.beneficios=this.form.value['beneficios'];
    this.membership.metodos_de_pago=this.form.value['metodos_de_pago'];
  

    if(this.form.value['monto_pago'].length>0 && this.form.value['beneficios'].length>0
    && this.form.value['metodos_de_pago'].length>0 ){
      this.aS.insert(this.membership).subscribe(data=>{
        this.aS.list().subscribe(data=>{
          this.aS.setList(data)})
    })

    this.router.navigate(['memberships']);

    } else{
      this.mensaje="Ingrese los datos de la membresía"
    }
  }
}
