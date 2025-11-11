import { Component, OnInit, ViewChild } from '@angular/core';
import { Departamento } from '../../models/Departamento';
import { ServicioDepartamento } from '../../services/service.departamento';

@Component({
  selector: 'app-departamentos.component',
  standalone: false,
  templateUrl: './departamentos.component.html',
  styleUrl: './departamentos.component.css',
})
export class DepartamentosComponent implements OnInit{
  public departamentos: Array<Departamento> = [];
  

  constructor(private _service: ServicioDepartamento){}

  ngOnInit(): void {
    this._service.getDepartamentos().then(response => {
      this.departamentos = response
    })
  }

}
