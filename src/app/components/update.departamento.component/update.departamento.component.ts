import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/Departamento';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServicioDepartamento } from '../../services/service.departamento';

@Component({
  selector: 'app-update.departamento.component',
  standalone: false,
  templateUrl: './update.departamento.component.html',
  styleUrl: './update.departamento.component.css',
})
export class UpdateDepartamentoComponent implements OnInit{
  public cajanumero!: string
  public cajanombre!: string
  public cajalocalidad!: string

  public departamento!: Departamento

  constructor(
    private _activeRoute: ActivatedRoute, 
    private _router: Router,
    private _service: ServicioDepartamento
    ){}

  ngOnInit(): void {
    
    let id: number = 0
    this._activeRoute.params.subscribe((params: Params) => {
      id = parseInt(params["id"])
    })
    this._service.getDepartamentoId(id).then(response => {
      this.cajanumero = response.numero.toString()
      this.cajanombre = response.nombre
      this.cajalocalidad = response.localidad
    })
  }
  updateDepartamento(): void{
    this.departamento = new Departamento(parseInt(this.cajanumero), this.cajanombre, this.cajalocalidad)
    this._service.updateDepartamento(this.departamento).subscribe(response => {
      this._router.navigate(['/details', this.departamento.numero, this.departamento.nombre, this.departamento.localidad])
    })
  }
}
