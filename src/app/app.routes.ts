import { Routes } from '@angular/router';
import { FormularioNormalComponent } from './formulario-normal/formulario-normal.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';

export const routes: Routes = [
  { 
    path: '', 
    component: FormularioNormalComponent
  },
  { 
    path: 'reactivo', 
    loadComponent() {
      return import('./formulario-reactivo/formulario-reactivo.component')
        .then(m => m.FormularioReactivoComponent);
    }, 
  }
];
