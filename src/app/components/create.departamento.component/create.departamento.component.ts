import { Component } from '@angular/core';
import { ServicioDepartamento } from '../../services/service.departamento';
import { Departamento } from '../../models/Departamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create.departamento.component',
  standalone: false,
  templateUrl: './create.departamento.component.html',
  styleUrl: './create.departamento.component.css',
})
export class CreateDepartamentoComponent {
  public cajanumero!: string 
  public cajanombre!: string 
  public cajalocalidad!: string 

  constructor(
    private _service: ServicioDepartamento,
    private _router:Router
  ){}

  crearDepartamento(){
    let numero = parseInt(this.cajanumero)
    let departamento = new Departamento(numero, this.cajanombre, this.cajalocalidad)
    this._service.createDepartamento(departamento).subscribe(response => {
      console.log("insertado")
      this._router.navigate(['/'])
    })
    
  }
}
