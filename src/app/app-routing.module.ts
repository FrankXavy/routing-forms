import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioNormalComponent } from './formulario-normal/formulario-normal.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';

const routes: Routes = [
  { path: '', component: FormularioNormalComponent },
  { path: 'reactivo', component: FormularioReactivoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
