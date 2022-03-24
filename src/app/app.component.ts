import { Component } from '@angular/core';

// Selector: Etiqueta HTML donde se colocara la app
// TemplateUrl: HTML a usar en archivo aparte
// Template: Código HTML a usar
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // template: `<span>Hola Mundo</span>`,
})
export class AppComponent {
  titulo: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  accumular(valor: number) {
    this.numero += valor;
  }
}
