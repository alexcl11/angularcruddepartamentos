import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Departamento } from "../models/Departamento";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ServicioDepartamento{
    urlDepartamentos = environment.urlDepartamentos;

    constructor(private _http: HttpClient){}

    getDepartamentos(): Promise<Array<Departamento>>{
        let request = "api/departamentos";
        let departamentos = fetch(this.urlDepartamentos+request).then(response => response.json())
        return departamentos
    }

    getDepartamentoId(id: number): Promise<Departamento>{
        let request = "api/departamentos/"+id;
        let departamento = fetch(this.urlDepartamentos+request).then(response => response.json())
        return departamento
    }

    createDepartamento(departamento: Departamento): Observable<any>{
        let json = JSON.stringify(departamento)
        let header = new HttpHeaders()

        header = header.set("Content-type", "application/json");
        let request = "api/departamentos"
        return this._http.post(this.urlDepartamentos+request, json, {headers: header})
    }

    updateDepartamento(departamento: Departamento): Observable<any>{
        let json = JSON.stringify(departamento)
        let header = new HttpHeaders().set("Content-type", "application/json")

        let request = "api/departamentos"
        return this._http.put(this.urlDepartamentos+request, json, {headers: header})
    }    

    deleteDepartamentos(id: number): Observable<any>{
        let request = "api/departamentos/"+id
        return this._http.delete(this.urlDepartamentos+request)
    }

}