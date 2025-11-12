import { Component, OnInit, ViewChild } from '@angular/core';
import { Departamento } from '../../models/Departamento';
import { ServicioDepartamento } from '../../services/service.departamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamentos.component',
  standalone: false,
  templateUrl: './departamentos.component.html',
  styleUrl: './departamentos.component.css',
})
export class DepartamentosComponent implements OnInit{
  public departamentos: Array<Departamento> = [];
  

  constructor(private _service: ServicioDepartamento, private _router: Router){}

  ngOnInit(): void {
    this._service.getDepartamentos().then(response => {
      this.departamentos = response
    })
  }

  deleteDepartamento(id:number): void{
      this._service.deleteDepartamentos(id).subscribe(response => {
        console.log(response)
        alert("Se ha eliminado correctamente")    
        this._service.getDepartamentos().then(response =>{
          this.departamentos = response
        })
      })
  }

}
