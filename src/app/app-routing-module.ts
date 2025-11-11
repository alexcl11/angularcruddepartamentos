import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentosComponent } from './components/departamentos.component/departamentos.component';
import { CreateDepartamentoComponent } from './components/create.departamento.component/create.departamento.component';
import { UpdateDepartamentoComponent } from './components/update.departamento.component/update.departamento.component';
import { DetailsDepartamentoComponent } from './components/details.departamento.component/details.departamento.component';

const routes: Routes = [
  {path: "", component: DepartamentosComponent},
  {path: "create", component: CreateDepartamentoComponent},
  {path: "update", component: UpdateDepartamentoComponent},
  {path: "details/:id/:nombre/:localidad", component: DetailsDepartamentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
