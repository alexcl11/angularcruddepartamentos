import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/Departamento';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details.departamento.component',
  standalone: false,
  templateUrl: './details.departamento.component.html',
  styleUrl: './details.departamento.component.css',
})
export class DetailsDepartamentoComponent implements OnInit{
  public departamento: Departamento = new Departamento(0, "", "");
  constructor(private _activeRoute: ActivatedRoute){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let numero = parseInt(params["id"])
      let nombre = params["nombre"]
      let localidad = params["localidad"]
      this.departamento = new Departamento(numero, nombre, localidad)
    })
  }

}
