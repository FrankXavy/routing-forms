import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-normal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-normal.component.html'
})
export class FormularioNormalComponent {
  nombre: string = '';
  nombres: string[] = [];

  enviar() {
    if (this.nombre.trim()) {
      this.nombres.push(this.nombre.trim());
      this.nombre = '';
    }
  }
}
