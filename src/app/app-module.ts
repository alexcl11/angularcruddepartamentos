import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu.component/menu.component';
import { DepartamentosComponent } from './components/departamentos.component/departamentos.component';
import { ServicioDepartamento } from './services/service.departamento';
import { FormsModule } from '@angular/forms';
import { CreateDepartamentoComponent } from './components/create.departamento.component/create.departamento.component';
import { UpdateDepartamentoComponent } from './components/update.departamento.component/update.departamento.component';
import { provideHttpClient } from '@angular/common/http';
import { DetailsDepartamentoComponent } from './components/details.departamento.component/details.departamento.component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    DepartamentosComponent,
    CreateDepartamentoComponent,
    UpdateDepartamentoComponent,
    DetailsDepartamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
