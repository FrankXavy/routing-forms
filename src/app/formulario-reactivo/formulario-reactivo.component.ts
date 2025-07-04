import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-reactivo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-reactivo.component.html'
})
export class FormularioReactivoComponent {
  form: FormGroup;
  correos: string[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  enviar() {
    if (this.form.valid) {
      this.correos.push(this.form.value.correo);
      this.form.reset();
    }
  }
}
