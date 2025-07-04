# RoutingForms

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

----------------------
Claro, aquí tienes una explicación de la estructura y funcionamiento del código de tu proyecto Angular, incluyendo cómo se implementó el routing, los formularios template-driven y los formularios reactivos.

---

## Estructura del Proyecto

El proyecto está organizado así:

- **src/app/**
  - **app.component.ts / .html / .css**: Componente raíz, contiene la navegación y el outlet de rutas.
  - **app-routing.module.ts**: Configuración de rutas usando el sistema clásico de módulos.
  - **app.routes.ts**: Definición de rutas para el enfoque standalone.
  - **app.config.ts**: Configuración de la aplicación para el arranque standalone.
  - **formulario-normal/**: Componente para formulario template-driven.
  - **formulario-reactivo/**: Componente para formulario reactivo.

---

## Routing (Enrutamiento)

El routing permite navegar entre los dos formularios:

- **Definición de rutas**  
  En `app.routes.ts` y `app-routing.module.ts` se definen dos rutas:
  - `''` (ruta raíz): muestra el componente `FormularioNormalComponent`.
  - `'reactivo'`: muestra el componente `FormularioReactivoComponent`.

- **Configuración**  
  - En modo standalone, las rutas se proveen en `app.config.ts` usando `provideRouter(routes)`.
  - En modo clásico, se usa el módulo `AppRoutingModule`.

- **Navegación**  
  En `app.component.html` se usan los enlaces:
  ```html
  <a routerLink="/" ...>Formulario Normal</a>
  <a routerLink="reactivo" ...>Formulario Reactivo</a>
  ```
  El `<router-outlet>` muestra el componente correspondiente según la ruta.

---

## Formularios

### 1. Template-driven Forms (Formulario Normal)

- **Componente:** `formulario-normal.component.ts`
- **HTML:** `formulario-normal.component.html`

**Características:**
- Usa `FormsModule`.
- El formulario se declara en la plantilla con `ngForm`.
- El campo `nombre` está vinculado con `[(ngModel)]`.
- Al enviar, si el campo no está vacío, se agrega el nombre a la lista.

**Ejemplo:**
```html
<form (ngSubmit)="enviar()" #form="ngForm">
  <input name="nombre" [(ngModel)]="nombre" required>
  <button type="submit" [disabled]="form.invalid">Enviar</button>
</form>
```

---

### 2. Reactive Forms (Formulario Reactivo)

- **Componente:** `formulario-reactivo.component.ts`
- **HTML:** `formulario-reactivo.component.html`

**Características:**
- Usa `ReactiveFormsModule`.
- El formulario se crea en el TypeScript con `FormBuilder`.
- El campo `correo` tiene validaciones de requerido y formato de email.
- Al enviar, si es válido, se agrega el correo a la lista y se resetea el formulario.

**Ejemplo:**
```html
<form [formGroup]="form" (ngSubmit)="enviar()">
  <input formControlName="correo" type="email">
  <!-- Mensajes de error -->
</form>
```

---

## Resumen

- **Routing:** Permite navegar entre los dos formularios usando rutas y `<router-outlet>`.
- **Formulario Template-driven:** Usa `ngModel` y se define en la plantilla.
- **Formulario Reactivo:** Usa `FormGroup` y validaciones en TypeScript.

